/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Reason_IllegalInputs */

const en_ranger_reason_illegal = /** @type {(inputs: Ranger_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Illegal content`)
};

const es_ranger_reason_illegal = /** @type {(inputs: Ranger_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenido ilegal`)
};

const de_ranger_reason_illegal = /** @type {(inputs: Ranger_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Illegaler Inhalt`)
};

const fr_ranger_reason_illegal = /** @type {(inputs: Ranger_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenu illégal`)
};

const it_ranger_reason_illegal = /** @type {(inputs: Ranger_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Contenuto illegale`)
};

const nl_ranger_reason_illegal = /** @type {(inputs: Ranger_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Illegale inhoud`)
};

const pl_ranger_reason_illegal = /** @type {(inputs: Ranger_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nielegalna treść`)
};

const pt_ranger_reason_illegal = /** @type {(inputs: Ranger_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conteúdo ilegal`)
};

const ru_ranger_reason_illegal = /** @type {(inputs: Ranger_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Незаконное содержимое`)
};

const sv_ranger_reason_illegal = /** @type {(inputs: Ranger_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Olagligt innehåll`)
};

const tr_ranger_reason_illegal = /** @type {(inputs: Ranger_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yasa dışı içerik`)
};

const zh_ranger_reason_illegal = /** @type {(inputs: Ranger_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`违法内容`)
};

const ja_ranger_reason_illegal = /** @type {(inputs: Ranger_Reason_IllegalInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`違法なコンテンツ`)
};

/**
* | output |
* | --- |
* | "Illegal content" |
*
* @param {Ranger_Reason_IllegalInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_reason_illegal = /** @type {((inputs?: Ranger_Reason_IllegalInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Reason_IllegalInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_reason_illegal(inputs)
	if (locale === "de") return de_ranger_reason_illegal(inputs)
	if (locale === "fr") return fr_ranger_reason_illegal(inputs)
	if (locale === "it") return it_ranger_reason_illegal(inputs)
	if (locale === "nl") return nl_ranger_reason_illegal(inputs)
	if (locale === "pl") return pl_ranger_reason_illegal(inputs)
	if (locale === "pt") return pt_ranger_reason_illegal(inputs)
	if (locale === "ru") return ru_ranger_reason_illegal(inputs)
	if (locale === "sv") return sv_ranger_reason_illegal(inputs)
	if (locale === "tr") return tr_ranger_reason_illegal(inputs)
	if (locale === "zh") return zh_ranger_reason_illegal(inputs)
	if (locale === "ja") return ja_ranger_reason_illegal(inputs)
	return en_ranger_reason_illegal(inputs)
});
