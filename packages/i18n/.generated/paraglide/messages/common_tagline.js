/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_TaglineInputs */

const en_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods for the island. Field-tested.`)
};

const es_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods para la isla. Probados en el terreno.`)
};

const de_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods für die Insel. Im Feld getestet.`)
};

const fr_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des mods pour l’île. Testés sur le terrain.`)
};

const it_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod per l’isola. Collaudate sul campo.`)
};

const nl_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods voor het eiland. In het veld getest.`)
};

const pl_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mody na wyspę. Sprawdzone w terenie.`)
};

const pt_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mods para a ilha. Testados em campo.`)
};

const ru_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Моды для острова. Проверено в полевых условиях.`)
};

const sv_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Moddar för ön. Testade i fält.`)
};

const tr_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ada için modlar. Sahada test edildi.`)
};

const zh_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`为这座岛打造的模组，经过实地检验。`)
};

const ja_common_tagline = /** @type {(inputs: Common_TaglineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`島のためのMOD。現地でテスト済み。`)
};

/**
* | output |
* | --- |
* | "Mods for the island. Field-tested." |
*
* @param {Common_TaglineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_tagline = /** @type {((inputs?: Common_TaglineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_TaglineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_tagline(inputs)
	if (locale === "de") return de_common_tagline(inputs)
	if (locale === "fr") return fr_common_tagline(inputs)
	if (locale === "it") return it_common_tagline(inputs)
	if (locale === "nl") return nl_common_tagline(inputs)
	if (locale === "pl") return pl_common_tagline(inputs)
	if (locale === "pt") return pt_common_tagline(inputs)
	if (locale === "ru") return ru_common_tagline(inputs)
	if (locale === "sv") return sv_common_tagline(inputs)
	if (locale === "tr") return tr_common_tagline(inputs)
	if (locale === "zh") return zh_common_tagline(inputs)
	if (locale === "ja") return ja_common_tagline(inputs)
	return en_common_tagline(inputs)
});
