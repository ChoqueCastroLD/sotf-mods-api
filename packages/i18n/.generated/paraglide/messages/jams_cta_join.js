/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Cta_JoinInputs */

const en_jams_cta_join = /** @type {(inputs: Jams_Cta_JoinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enter the jam`)
};

const es_jams_cta_join = /** @type {(inputs: Jams_Cta_JoinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participar en el jam`)
};

const de_jams_cta_join = /** @type {(inputs: Jams_Cta_JoinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Am Jam teilnehmen`)
};

const fr_jams_cta_join = /** @type {(inputs: Jams_Cta_JoinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participer au jam`)
};

const it_jams_cta_join = /** @type {(inputs: Jams_Cta_JoinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partecipa al jam`)
};

const nl_jams_cta_join = /** @type {(inputs: Jams_Cta_JoinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doe mee aan de jam`)
};

const pl_jams_cta_join = /** @type {(inputs: Jams_Cta_JoinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weź udział w jamie`)
};

const pt_jams_cta_join = /** @type {(inputs: Jams_Cta_JoinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Participar do jam`)
};

const ru_jams_cta_join = /** @type {(inputs: Jams_Cta_JoinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Участвовать в джеме`)
};

const sv_jams_cta_join = /** @type {(inputs: Jams_Cta_JoinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Delta i jammen`)
};

const tr_jams_cta_join = /** @type {(inputs: Jams_Cta_JoinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jam'e katıl`)
};

const zh_jams_cta_join = /** @type {(inputs: Jams_Cta_JoinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参加 Jam`)
};

const ja_jams_cta_join = /** @type {(inputs: Jams_Cta_JoinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ジャムに参加する`)
};

/**
* | output |
* | --- |
* | "Enter the jam" |
*
* @param {Jams_Cta_JoinInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_cta_join = /** @type {((inputs?: Jams_Cta_JoinInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Cta_JoinInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_cta_join(inputs)
	if (locale === "de") return de_jams_cta_join(inputs)
	if (locale === "fr") return fr_jams_cta_join(inputs)
	if (locale === "it") return it_jams_cta_join(inputs)
	if (locale === "nl") return nl_jams_cta_join(inputs)
	if (locale === "pl") return pl_jams_cta_join(inputs)
	if (locale === "pt") return pt_jams_cta_join(inputs)
	if (locale === "ru") return ru_jams_cta_join(inputs)
	if (locale === "sv") return sv_jams_cta_join(inputs)
	if (locale === "tr") return tr_jams_cta_join(inputs)
	if (locale === "zh") return zh_jams_cta_join(inputs)
	if (locale === "ja") return ja_jams_cta_join(inputs)
	return en_jams_cta_join(inputs)
});
