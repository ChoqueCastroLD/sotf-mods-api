/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Me_Onboarding_Kit_TitleInputs */

const en_me_onboarding_kit_title = /** @type {(inputs: Me_Onboarding_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pack a kit`)
};

const es_me_onboarding_kit_title = /** @type {(inputs: Me_Onboarding_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepara un kit`)
};

const de_me_onboarding_kit_title = /** @type {(inputs: Me_Onboarding_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pack ein Kit`)
};

const fr_me_onboarding_kit_title = /** @type {(inputs: Me_Onboarding_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préparez un kit`)
};

const it_me_onboarding_kit_title = /** @type {(inputs: Me_Onboarding_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prepara un kit`)
};

const nl_me_onboarding_kit_title = /** @type {(inputs: Me_Onboarding_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stel een kit samen`)
};

const pl_me_onboarding_kit_title = /** @type {(inputs: Me_Onboarding_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spakuj zestaw`)
};

const pt_me_onboarding_kit_title = /** @type {(inputs: Me_Onboarding_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Monte um kit`)
};

const ru_me_onboarding_kit_title = /** @type {(inputs: Me_Onboarding_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Соберите набор`)
};

const sv_me_onboarding_kit_title = /** @type {(inputs: Me_Onboarding_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Packa ett kit`)
};

const tr_me_onboarding_kit_title = /** @type {(inputs: Me_Onboarding_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir kit hazırla`)
};

const zh_me_onboarding_kit_title = /** @type {(inputs: Me_Onboarding_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`打包一个套装`)
};

const ja_me_onboarding_kit_title = /** @type {(inputs: Me_Onboarding_Kit_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットを組もう`)
};

/**
* | output |
* | --- |
* | "Pack a kit" |
*
* @param {Me_Onboarding_Kit_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_onboarding_kit_title = /** @type {((inputs?: Me_Onboarding_Kit_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Onboarding_Kit_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_onboarding_kit_title(inputs)
	if (locale === "de") return de_me_onboarding_kit_title(inputs)
	if (locale === "fr") return fr_me_onboarding_kit_title(inputs)
	if (locale === "it") return it_me_onboarding_kit_title(inputs)
	if (locale === "nl") return nl_me_onboarding_kit_title(inputs)
	if (locale === "pl") return pl_me_onboarding_kit_title(inputs)
	if (locale === "pt") return pt_me_onboarding_kit_title(inputs)
	if (locale === "ru") return ru_me_onboarding_kit_title(inputs)
	if (locale === "sv") return sv_me_onboarding_kit_title(inputs)
	if (locale === "tr") return tr_me_onboarding_kit_title(inputs)
	if (locale === "zh") return zh_me_onboarding_kit_title(inputs)
	if (locale === "ja") return ja_me_onboarding_kit_title(inputs)
	return en_me_onboarding_kit_title(inputs)
});
