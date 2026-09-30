/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Report_IntroInputs */

const en_mod_report_intro = /** @type {(inputs: Mod_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tell the rangers what’s wrong. Reports are private.`)
};

const es_mod_report_intro = /** @type {(inputs: Mod_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cuéntales a los rangers qué pasa. Las denuncias son privadas.`)
};

const de_mod_report_intro = /** @type {(inputs: Mod_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sag den Rangern, was nicht stimmt. Meldungen sind privat.`)
};

const fr_mod_report_intro = /** @type {(inputs: Mod_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dites aux rangers ce qui ne va pas. Les signalements sont privés.`)
};

const it_mod_report_intro = /** @type {(inputs: Mod_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiega ai ranger cosa non va. Le segnalazioni sono private.`)
};

const nl_mod_report_intro = /** @type {(inputs: Mod_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertel de rangers wat er mis is. Meldingen zijn privé.`)
};

const pl_mod_report_intro = /** @type {(inputs: Mod_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Powiedz rangerom, co jest nie tak. Zgłoszenia są prywatne.`)
};

const pt_mod_report_intro = /** @type {(inputs: Mod_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conte aos rangers o que está errado. Denúncias são privadas.`)
};

const ru_mod_report_intro = /** @type {(inputs: Mod_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Расскажите рейнджерам, что не так. Жалобы видят только рейнджеры.`)
};

const sv_mod_report_intro = /** @type {(inputs: Mod_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Berätta för rangers vad som är fel. Anmälningar är privata.`)
};

const tr_mod_report_intro = /** @type {(inputs: Mod_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucular’a sorunu anlat. Şikâyetler gizlidir.`)
};

const zh_mod_report_intro = /** @type {(inputs: Mod_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`告诉护林员哪里有问题。举报内容不公开。`)
};

const ja_mod_report_intro = /** @type {(inputs: Mod_Report_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`問題をレンジャーに伝えてください。通報は非公開です。`)
};

/**
* | output |
* | --- |
* | "Tell the rangers what’s wrong. Reports are private." |
*
* @param {Mod_Report_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_report_intro = /** @type {((inputs?: Mod_Report_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Report_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_report_intro(inputs)
	if (locale === "de") return de_mod_report_intro(inputs)
	if (locale === "fr") return fr_mod_report_intro(inputs)
	if (locale === "it") return it_mod_report_intro(inputs)
	if (locale === "nl") return nl_mod_report_intro(inputs)
	if (locale === "pl") return pl_mod_report_intro(inputs)
	if (locale === "pt") return pt_mod_report_intro(inputs)
	if (locale === "ru") return ru_mod_report_intro(inputs)
	if (locale === "sv") return sv_mod_report_intro(inputs)
	if (locale === "tr") return tr_mod_report_intro(inputs)
	if (locale === "zh") return zh_mod_report_intro(inputs)
	if (locale === "ja") return ja_mod_report_intro(inputs)
	return en_mod_report_intro(inputs)
});
