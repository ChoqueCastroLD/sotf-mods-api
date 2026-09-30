/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Submit_ConfirmInputs */

const en_jams_submit_confirm = /** @type {(inputs: Jams_Submit_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submit entry`)
};

const es_jams_submit_confirm = /** @type {(inputs: Jams_Submit_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar participación`)
};

const de_jams_submit_confirm = /** @type {(inputs: Jams_Submit_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beitrag einreichen`)
};

const fr_jams_submit_confirm = /** @type {(inputs: Jams_Submit_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soumettre`)
};

const it_jams_submit_confirm = /** @type {(inputs: Jams_Submit_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia iscrizione`)
};

const nl_jams_submit_confirm = /** @type {(inputs: Jams_Submit_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzending indienen`)
};

const pl_jams_submit_confirm = /** @type {(inputs: Jams_Submit_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś`)
};

const pt_jams_submit_confirm = /** @type {(inputs: Jams_Submit_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar inscrição`)
};

const ru_jams_submit_confirm = /** @type {(inputs: Jams_Submit_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить`)
};

const sv_jams_submit_confirm = /** @type {(inputs: Jams_Submit_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka in`)
};

const tr_jams_submit_confirm = /** @type {(inputs: Jams_Submit_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvur`)
};

const zh_jams_submit_confirm = /** @type {(inputs: Jams_Submit_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交`)
};

const ja_jams_submit_confirm = /** @type {(inputs: Jams_Submit_ConfirmInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`応募する`)
};

/**
* | output |
* | --- |
* | "Submit entry" |
*
* @param {Jams_Submit_ConfirmInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_submit_confirm = /** @type {((inputs?: Jams_Submit_ConfirmInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Submit_ConfirmInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_submit_confirm(inputs)
	if (locale === "de") return de_jams_submit_confirm(inputs)
	if (locale === "fr") return fr_jams_submit_confirm(inputs)
	if (locale === "it") return it_jams_submit_confirm(inputs)
	if (locale === "nl") return nl_jams_submit_confirm(inputs)
	if (locale === "pl") return pl_jams_submit_confirm(inputs)
	if (locale === "pt") return pt_jams_submit_confirm(inputs)
	if (locale === "ru") return ru_jams_submit_confirm(inputs)
	if (locale === "sv") return sv_jams_submit_confirm(inputs)
	if (locale === "tr") return tr_jams_submit_confirm(inputs)
	if (locale === "zh") return zh_jams_submit_confirm(inputs)
	if (locale === "ja") return ja_jams_submit_confirm(inputs)
	return en_jams_submit_confirm(inputs)
});
