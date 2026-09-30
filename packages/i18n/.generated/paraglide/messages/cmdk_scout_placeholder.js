/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Cmdk_Scout_PlaceholderInputs */

const en_cmdk_scout_placeholder = /** @type {(inputs: Cmdk_Scout_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe the mod you need…`)
};

const es_cmdk_scout_placeholder = /** @type {(inputs: Cmdk_Scout_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Describe el mod que necesitas…`)
};

const de_cmdk_scout_placeholder = /** @type {(inputs: Cmdk_Scout_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschreibe die Mod, die du brauchst…`)
};

const fr_cmdk_scout_placeholder = /** @type {(inputs: Cmdk_Scout_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Décris le mod dont tu as besoin…`)
};

const it_cmdk_scout_placeholder = /** @type {(inputs: Cmdk_Scout_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descrivi la mod che ti serve…`)
};

const nl_cmdk_scout_placeholder = /** @type {(inputs: Cmdk_Scout_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beschrijf de mod die je nodig hebt…`)
};

const pl_cmdk_scout_placeholder = /** @type {(inputs: Cmdk_Scout_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opisz moda, którego potrzebujesz…`)
};

const pt_cmdk_scout_placeholder = /** @type {(inputs: Cmdk_Scout_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Descreve o mod de que precisas…`)
};

const ru_cmdk_scout_placeholder = /** @type {(inputs: Cmdk_Scout_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Опишите нужный мод…`)
};

const sv_cmdk_scout_placeholder = /** @type {(inputs: Cmdk_Scout_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beskriv modden du behöver…`)
};

const tr_cmdk_scout_placeholder = /** @type {(inputs: Cmdk_Scout_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`İhtiyacın olan modu anlat…`)
};

const zh_cmdk_scout_placeholder = /** @type {(inputs: Cmdk_Scout_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`描述你需要的模组…`)
};

const ja_cmdk_scout_placeholder = /** @type {(inputs: Cmdk_Scout_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`必要なModを説明してください…`)
};

/**
* | output |
* | --- |
* | "Describe the mod you need…" |
*
* @param {Cmdk_Scout_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const cmdk_scout_placeholder = /** @type {((inputs?: Cmdk_Scout_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Cmdk_Scout_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_cmdk_scout_placeholder(inputs)
	if (locale === "de") return de_cmdk_scout_placeholder(inputs)
	if (locale === "fr") return fr_cmdk_scout_placeholder(inputs)
	if (locale === "it") return it_cmdk_scout_placeholder(inputs)
	if (locale === "nl") return nl_cmdk_scout_placeholder(inputs)
	if (locale === "pl") return pl_cmdk_scout_placeholder(inputs)
	if (locale === "pt") return pt_cmdk_scout_placeholder(inputs)
	if (locale === "ru") return ru_cmdk_scout_placeholder(inputs)
	if (locale === "sv") return sv_cmdk_scout_placeholder(inputs)
	if (locale === "tr") return tr_cmdk_scout_placeholder(inputs)
	if (locale === "zh") return zh_cmdk_scout_placeholder(inputs)
	if (locale === "ja") return ja_cmdk_scout_placeholder(inputs)
	return en_cmdk_scout_placeholder(inputs)
});
