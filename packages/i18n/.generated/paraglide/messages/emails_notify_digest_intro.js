/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Digest_IntroInputs */

const en_emails_notify_digest_intro = /** @type {(inputs: Emails_Notify_Digest_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Everything you follow, in one email.`)
};

const es_emails_notify_digest_intro = /** @type {(inputs: Emails_Notify_Digest_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todo lo que sigues, en un solo email.`)
};

const de_emails_notify_digest_intro = /** @type {(inputs: Emails_Notify_Digest_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles, dem du folgst, in einer E-Mail.`)
};

const fr_emails_notify_digest_intro = /** @type {(inputs: Emails_Notify_Digest_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tout ce que vous suivez, dans un seul e-mail.`)
};

const it_emails_notify_digest_intro = /** @type {(inputs: Emails_Notify_Digest_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tutto ciò che segui, in un’unica email.`)
};

const nl_emails_notify_digest_intro = /** @type {(inputs: Emails_Notify_Digest_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alles wat je volgt, in één e-mail.`)
};

const pl_emails_notify_digest_intro = /** @type {(inputs: Emails_Notify_Digest_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wszystko, co obserwujesz, w jednym e-mailu.`)
};

const pt_emails_notify_digest_intro = /** @type {(inputs: Emails_Notify_Digest_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tudo o que você segue, em um só e-mail.`)
};

const ru_emails_notify_digest_intro = /** @type {(inputs: Emails_Notify_Digest_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Всё, за чем вы следите, в одном письме.`)
};

const sv_emails_notify_digest_intro = /** @type {(inputs: Emails_Notify_Digest_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Allt du följer, i ett enda mejl.`)
};

const tr_emails_notify_digest_intro = /** @type {(inputs: Emails_Notify_Digest_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Takip ettiğin her şey tek bir e-postada.`)
};

const zh_emails_notify_digest_intro = /** @type {(inputs: Emails_Notify_Digest_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你关注的一切，尽在这一封邮件。`)
};

const ja_emails_notify_digest_intro = /** @type {(inputs: Emails_Notify_Digest_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`フォローしているすべてを 1 通のメールで。`)
};

/**
* | output |
* | --- |
* | "Everything you follow, in one email." |
*
* @param {Emails_Notify_Digest_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_digest_intro = /** @type {((inputs?: Emails_Notify_Digest_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Digest_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_digest_intro(inputs)
	if (locale === "de") return de_emails_notify_digest_intro(inputs)
	if (locale === "fr") return fr_emails_notify_digest_intro(inputs)
	if (locale === "it") return it_emails_notify_digest_intro(inputs)
	if (locale === "nl") return nl_emails_notify_digest_intro(inputs)
	if (locale === "pl") return pl_emails_notify_digest_intro(inputs)
	if (locale === "pt") return pt_emails_notify_digest_intro(inputs)
	if (locale === "ru") return ru_emails_notify_digest_intro(inputs)
	if (locale === "sv") return sv_emails_notify_digest_intro(inputs)
	if (locale === "tr") return tr_emails_notify_digest_intro(inputs)
	if (locale === "zh") return zh_emails_notify_digest_intro(inputs)
	if (locale === "ja") return ja_emails_notify_digest_intro(inputs)
	return en_emails_notify_digest_intro(inputs)
});
