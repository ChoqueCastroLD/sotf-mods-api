/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Submit_ActionInputs */

const en_jams_submit_action = /** @type {(inputs: Jams_Submit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Submit an entry`)
};

const es_jams_submit_action = /** @type {(inputs: Jams_Submit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar participación`)
};

const de_jams_submit_action = /** @type {(inputs: Jams_Submit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beitrag einreichen`)
};

const fr_jams_submit_action = /** @type {(inputs: Jams_Submit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Soumettre une participation`)
};

const it_jams_submit_action = /** @type {(inputs: Jams_Submit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Invia un'iscrizione`)
};

const nl_jams_submit_action = /** @type {(inputs: Jams_Submit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inzending indienen`)
};

const pl_jams_submit_action = /** @type {(inputs: Jams_Submit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoś pracę`)
};

const pt_jams_submit_action = /** @type {(inputs: Jams_Submit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enviar inscrição`)
};

const ru_jams_submit_action = /** @type {(inputs: Jams_Submit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отправить работу`)
};

const sv_jams_submit_action = /** @type {(inputs: Jams_Submit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skicka in bidrag`)
};

const tr_jams_submit_action = /** @type {(inputs: Jams_Submit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Başvuru yap`)
};

const zh_jams_submit_action = /** @type {(inputs: Jams_Submit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`提交作品`)
};

const ja_jams_submit_action = /** @type {(inputs: Jams_Submit_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`作品を応募`)
};

/**
* | output |
* | --- |
* | "Submit an entry" |
*
* @param {Jams_Submit_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_submit_action = /** @type {((inputs?: Jams_Submit_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Submit_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_submit_action(inputs)
	if (locale === "de") return de_jams_submit_action(inputs)
	if (locale === "fr") return fr_jams_submit_action(inputs)
	if (locale === "it") return it_jams_submit_action(inputs)
	if (locale === "nl") return nl_jams_submit_action(inputs)
	if (locale === "pl") return pl_jams_submit_action(inputs)
	if (locale === "pt") return pt_jams_submit_action(inputs)
	if (locale === "ru") return ru_jams_submit_action(inputs)
	if (locale === "sv") return sv_jams_submit_action(inputs)
	if (locale === "tr") return tr_jams_submit_action(inputs)
	if (locale === "zh") return zh_jams_submit_action(inputs)
	if (locale === "ja") return ja_jams_submit_action(inputs)
	return en_jams_submit_action(inputs)
});
