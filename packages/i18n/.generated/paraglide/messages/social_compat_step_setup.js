/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Step_SetupInputs */

const en_social_compat_step_setup = /** @type {(inputs: Social_Compat_Step_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your setup`)
};

const es_social_compat_step_setup = /** @type {(inputs: Social_Compat_Step_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu configuración`)
};

const de_social_compat_step_setup = /** @type {(inputs: Social_Compat_Step_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Setup`)
};

const fr_social_compat_step_setup = /** @type {(inputs: Social_Compat_Step_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre configuration`)
};

const it_social_compat_step_setup = /** @type {(inputs: Social_Compat_Step_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`La tua configurazione`)
};

const nl_social_compat_step_setup = /** @type {(inputs: Social_Compat_Step_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jouw opstelling`)
};

const pl_social_compat_step_setup = /** @type {(inputs: Social_Compat_Step_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoja konfiguracja`)
};

const pt_social_compat_step_setup = /** @type {(inputs: Social_Compat_Step_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sua configuração`)
};

const ru_social_compat_step_setup = /** @type {(inputs: Social_Compat_Step_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваша конфигурация`)
};

const sv_social_compat_step_setup = /** @type {(inputs: Social_Compat_Step_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din uppsättning`)
};

const tr_social_compat_step_setup = /** @type {(inputs: Social_Compat_Step_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurulumun`)
};

const zh_social_compat_step_setup = /** @type {(inputs: Social_Compat_Step_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的环境`)
};

const ja_social_compat_step_setup = /** @type {(inputs: Social_Compat_Step_SetupInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの環境`)
};

/**
* | output |
* | --- |
* | "Your setup" |
*
* @param {Social_Compat_Step_SetupInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_step_setup = /** @type {((inputs?: Social_Compat_Step_SetupInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Step_SetupInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_step_setup(inputs)
	if (locale === "de") return de_social_compat_step_setup(inputs)
	if (locale === "fr") return fr_social_compat_step_setup(inputs)
	if (locale === "it") return it_social_compat_step_setup(inputs)
	if (locale === "nl") return nl_social_compat_step_setup(inputs)
	if (locale === "pl") return pl_social_compat_step_setup(inputs)
	if (locale === "pt") return pt_social_compat_step_setup(inputs)
	if (locale === "ru") return ru_social_compat_step_setup(inputs)
	if (locale === "sv") return sv_social_compat_step_setup(inputs)
	if (locale === "tr") return tr_social_compat_step_setup(inputs)
	if (locale === "zh") return zh_social_compat_step_setup(inputs)
	if (locale === "ja") return ja_social_compat_step_setup(inputs)
	return en_social_compat_step_setup(inputs)
});
