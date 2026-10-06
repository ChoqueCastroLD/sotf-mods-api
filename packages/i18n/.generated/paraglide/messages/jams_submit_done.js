/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Submit_DoneInputs */

const en_jams_submit_done = /** @type {(inputs: Jams_Submit_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entry submitted.`)
};

const es_jams_submit_done = /** @type {(inputs: Jams_Submit_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participación enviada.`)
};

const de_jams_submit_done = /** @type {(inputs: Jams_Submit_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beitrag eingereicht.`)
};

const fr_jams_submit_done = /** @type {(inputs: Jams_Submit_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participation envoyée.`)
};

const it_jams_submit_done = /** @type {(inputs: Jams_Submit_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iscrizione inviata.`)
};

const nl_jams_submit_done = /** @type {(inputs: Jams_Submit_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzending ingediend.`)
};

const pl_jams_submit_done = /** @type {(inputs: Jams_Submit_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenie wysłane.`)
};

const pt_jams_submit_done = /** @type {(inputs: Jams_Submit_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inscrição enviada.`)
};

const ru_jams_submit_done = /** @type {(inputs: Jams_Submit_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Работа отправлена.`)
};

const sv_jams_submit_done = /** @type {(inputs: Jams_Submit_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bidraget är inskickat.`)
};

const tr_jams_submit_done = /** @type {(inputs: Jams_Submit_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuru gönderildi.`)
};

const zh_jams_submit_done = /** @type {(inputs: Jams_Submit_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品已提交。`)
};

const ja_jams_submit_done = /** @type {(inputs: Jams_Submit_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募しました。`)
};

/**
* | output |
* | --- |
* | "Entry submitted." |
*
* @param {Jams_Submit_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_submit_done = /** @type {((inputs?: Jams_Submit_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Submit_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_submit_done(inputs)
	if (locale === "de") return de_jams_submit_done(inputs)
	if (locale === "fr") return fr_jams_submit_done(inputs)
	if (locale === "it") return it_jams_submit_done(inputs)
	if (locale === "nl") return nl_jams_submit_done(inputs)
	if (locale === "pl") return pl_jams_submit_done(inputs)
	if (locale === "pt") return pt_jams_submit_done(inputs)
	if (locale === "ru") return ru_jams_submit_done(inputs)
	if (locale === "sv") return sv_jams_submit_done(inputs)
	if (locale === "tr") return tr_jams_submit_done(inputs)
	if (locale === "zh") return zh_jams_submit_done(inputs)
	if (locale === "ja") return ja_jams_submit_done(inputs)
	return en_jams_submit_done(inputs)
});
