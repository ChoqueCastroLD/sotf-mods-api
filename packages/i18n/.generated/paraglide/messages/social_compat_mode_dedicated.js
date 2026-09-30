/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Mode_DedicatedInputs */

const en_social_compat_mode_dedicated = /** @type {(inputs: Social_Compat_Mode_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const es_social_compat_mode_dedicated = /** @type {(inputs: Social_Compat_Mode_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const de_social_compat_mode_dedicated = /** @type {(inputs: Social_Compat_Mode_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedizierter Server`)
};

const fr_social_compat_mode_dedicated = /** @type {(inputs: Social_Compat_Mode_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serveur dédié`)
};

const it_social_compat_mode_dedicated = /** @type {(inputs: Social_Compat_Mode_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Server dedicato`)
};

const nl_social_compat_mode_dedicated = /** @type {(inputs: Social_Compat_Mode_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedicated server`)
};

const pl_social_compat_mode_dedicated = /** @type {(inputs: Social_Compat_Mode_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Serwer dedykowany`)
};

const pt_social_compat_mode_dedicated = /** @type {(inputs: Social_Compat_Mode_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Servidor dedicado`)
};

const ru_social_compat_mode_dedicated = /** @type {(inputs: Social_Compat_Mode_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выделенный сервер`)
};

const sv_social_compat_mode_dedicated = /** @type {(inputs: Social_Compat_Mode_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dedikerad server`)
};

const tr_social_compat_mode_dedicated = /** @type {(inputs: Social_Compat_Mode_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel sunucu`)
};

const zh_social_compat_mode_dedicated = /** @type {(inputs: Social_Compat_Mode_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`专用服务器`)
};

const ja_social_compat_mode_dedicated = /** @type {(inputs: Social_Compat_Mode_DedicatedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`専用サーバー`)
};

/**
* | output |
* | --- |
* | "Dedicated server" |
*
* @param {Social_Compat_Mode_DedicatedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_mode_dedicated = /** @type {((inputs?: Social_Compat_Mode_DedicatedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Mode_DedicatedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_mode_dedicated(inputs)
	if (locale === "de") return de_social_compat_mode_dedicated(inputs)
	if (locale === "fr") return fr_social_compat_mode_dedicated(inputs)
	if (locale === "it") return it_social_compat_mode_dedicated(inputs)
	if (locale === "nl") return nl_social_compat_mode_dedicated(inputs)
	if (locale === "pl") return pl_social_compat_mode_dedicated(inputs)
	if (locale === "pt") return pt_social_compat_mode_dedicated(inputs)
	if (locale === "ru") return ru_social_compat_mode_dedicated(inputs)
	if (locale === "sv") return sv_social_compat_mode_dedicated(inputs)
	if (locale === "tr") return tr_social_compat_mode_dedicated(inputs)
	if (locale === "zh") return zh_social_compat_mode_dedicated(inputs)
	if (locale === "ja") return ja_social_compat_mode_dedicated(inputs)
	return en_social_compat_mode_dedicated(inputs)
});
