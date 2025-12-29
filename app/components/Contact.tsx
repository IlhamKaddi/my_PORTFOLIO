"use client";

import { Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast, Toaster } from "sonner";
import { motion } from "framer-motion";

/* ---------------- ZOD SCHEMA ---------------- */
const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  subject: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();

      toast.success("Message sent successfully 🚀", {
        description: "Thank you for reaching out. I'll reply soon.",
      });

      reset();
    } catch {
      toast.error("Failed to send message ❌", {
        description: "Please try again later.",
      });
    }
  };

  return (
    <>
      <Toaster position="top-center" richColors />
      <section
        className="py-12 bg-black text-white flex items-center px-6"
        style={{
          backgroundImage: `
            linear-gradient(rgba(244,114,182,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(244,114,182,0.05) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      >
        <div className="mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16">

          {/* LEFT */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl font-bold bg-gradient-to-r from-purple-400 via-pink-400  bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Get in touch
            </motion.h2>
            <motion.p 
              className="text-neutral-400 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              I m very approachable and would love to speak with you.
            </motion.p>

            <div className="space-y-6">
              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                whileHover={{ x: 10 }}
              >
                <div className="w-11 h-11 rounded-full bg-[#f85c70] flex items-center justify-center">
                  <Phone size={18} />
                </div>
                <span>0615790034</span>
              </motion.div>

              <motion.div 
                className="flex items-center gap-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                whileHover={{ x: 10 }}
              >
                <div className="w-11 h-11 rounded-full bg-[#f85c70] flex items-center justify-center">
                  <Mail size={18} />
                </div>
                <span>ilhamkaddi2004@gmail.com</span>
              </motion.div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.h3 
              className="text-3xl font-semibold mb-8 bg-gradient-to-r from-purple-400 via-pink-400  bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Send me a message
            </motion.h3>

            <motion.form 
              onSubmit={handleSubmit(onSubmit)} 
              className="space-y-5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <input
                {...register("name")}
                placeholder="Name"
                className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-5 py-4 focus:border-primary focus:outline-none transition-colors"
              />
              {errors.name && <p className="text-red-400">{errors.name.message}</p>}

              <input
                {...register("email")}
                type="email"
                placeholder="Email Address"
                className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-5 py-4 focus:border-primary focus:outline-none transition-colors"
              />
              {errors.email && <p className="text-red-400">{errors.email.message}</p>}

              <input
                {...register("subject")}
                placeholder="Subject"
                className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-5 py-4 focus:border-primary focus:outline-none transition-colors"
              />

              <textarea
                {...register("message")}
                placeholder="Your message"
                rows={4}
                className="w-full rounded-lg bg-neutral-900 border border-neutral-700 px-5 py-4 focus:border-primary focus:outline-none transition-colors"
              />
              {errors.message && (
                <p className="text-red-400">{errors.message.message}</p>
              )}

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="relative rounded-full bg-[#f85c70] px-8 py-4 font-medium text-white overflow-hidden group disabled:opacity-50"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-500"
                  initial={{ x: "100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.form>
          </motion.div>
        </div>
      </section>
    </>
  );
}