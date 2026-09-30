/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Prompt_LaterInputs */

const en_social_compat_prompt_later = /** @type {(inputs: Social_Compat_Prompt_LaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not now`)
};

const es_social_compat_prompt_later = /** @type {(inputs: Social_Compat_Prompt_LaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ahora no`)
};

const de_social_compat_prompt_later = /** @type {(inputs: Social_Compat_Prompt_LaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht jetzt`)
};

const fr_social_compat_prompt_later = /** @type {(inputs: Social_Compat_Prompt_LaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas maintenant`)
};

const it_social_compat_prompt_later = /** @type {(inputs: Social_Compat_Prompt_LaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ora`)
};

const nl_social_compat_prompt_later = /** @type {(inputs: Social_Compat_Prompt_LaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet nu`)
};

const pl_social_compat_prompt_later = /** @type {(inputs: Social_Compat_Prompt_LaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie teraz`)
};

const pt_social_compat_prompt_later = /** @type {(inputs: Social_Compat_Prompt_LaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Agora não`)
};

const ru_social_compat_prompt_later = /** @type {(inputs: Social_Compat_Prompt_LaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не сейчас`)
};

const sv_social_compat_prompt_later = /** @type {(inputs: Social_Compat_Prompt_LaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte nu`)
};

const tr_social_compat_prompt_later = /** @type {(inputs: Social_Compat_Prompt_LaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Şimdi değil`)
};

const zh_social_compat_prompt_later = /** @type {(inputs: Social_Compat_Prompt_LaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以后再说`)
};

const ja_social_compat_prompt_later = /** @type {(inputs: Social_Compat_Prompt_LaterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`今はしない`)
};

/**
* | output |
* | --- |
* | "Not now" |
*
* @param {Social_Compat_Prompt_LaterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_prompt_later = /** @type {((inputs?: Social_Compat_Prompt_LaterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Prompt_LaterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_prompt_later(inputs)
	if (locale === "de") return de_social_compat_prompt_later(inputs)
	if (locale === "fr") return fr_social_compat_prompt_later(inputs)
	if (locale === "it") return it_social_compat_prompt_later(inputs)
	if (locale === "nl") return nl_social_compat_prompt_later(inputs)
	if (locale === "pl") return pl_social_compat_prompt_later(inputs)
	if (locale === "pt") return pt_social_compat_prompt_later(inputs)
	if (locale === "ru") return ru_social_compat_prompt_later(inputs)
	if (locale === "sv") return sv_social_compat_prompt_later(inputs)
	if (locale === "tr") return tr_social_compat_prompt_later(inputs)
	if (locale === "zh") return zh_social_compat_prompt_later(inputs)
	if (locale === "ja") return ja_social_compat_prompt_later(inputs)
	return en_social_compat_prompt_later(inputs)
});
