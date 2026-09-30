/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Mode_Dedicated_HintInputs */

const en_social_compat_mode_dedicated_hint = /** @type {(inputs: Social_Compat_Mode_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installed on a dedicated server.`)
};

const es_social_compat_mode_dedicated_hint = /** @type {(inputs: Social_Compat_Mode_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalado en un servidor dedicado.`)
};

const de_social_compat_mode_dedicated_hint = /** @type {(inputs: Social_Compat_Mode_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Auf einem dedizierten Server installiert.`)
};

const fr_social_compat_mode_dedicated_hint = /** @type {(inputs: Social_Compat_Mode_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installé sur un serveur dédié.`)
};

const it_social_compat_mode_dedicated_hint = /** @type {(inputs: Social_Compat_Mode_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installata su un server dedicato.`)
};

const nl_social_compat_mode_dedicated_hint = /** @type {(inputs: Social_Compat_Mode_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geïnstalleerd op een dedicated server.`)
};

const pl_social_compat_mode_dedicated_hint = /** @type {(inputs: Social_Compat_Mode_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zainstalowany na serwerze dedykowanym.`)
};

const pt_social_compat_mode_dedicated_hint = /** @type {(inputs: Social_Compat_Mode_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Instalado em um servidor dedicado.`)
};

const ru_social_compat_mode_dedicated_hint = /** @type {(inputs: Social_Compat_Mode_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Установлен на выделенный сервер.`)
};

const sv_social_compat_mode_dedicated_hint = /** @type {(inputs: Social_Compat_Mode_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Installerad på en dedikerad server.`)
};

const tr_social_compat_mode_dedicated_hint = /** @type {(inputs: Social_Compat_Mode_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Özel bir sunucuya kurulu.`)
};

const zh_social_compat_mode_dedicated_hint = /** @type {(inputs: Social_Compat_Mode_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安装在专用服务器上。`)
};

const ja_social_compat_mode_dedicated_hint = /** @type {(inputs: Social_Compat_Mode_Dedicated_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`専用サーバーにインストール。`)
};

/**
* | output |
* | --- |
* | "Installed on a dedicated server." |
*
* @param {Social_Compat_Mode_Dedicated_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_mode_dedicated_hint = /** @type {((inputs?: Social_Compat_Mode_Dedicated_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Mode_Dedicated_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_mode_dedicated_hint(inputs)
	if (locale === "de") return de_social_compat_mode_dedicated_hint(inputs)
	if (locale === "fr") return fr_social_compat_mode_dedicated_hint(inputs)
	if (locale === "it") return it_social_compat_mode_dedicated_hint(inputs)
	if (locale === "nl") return nl_social_compat_mode_dedicated_hint(inputs)
	if (locale === "pl") return pl_social_compat_mode_dedicated_hint(inputs)
	if (locale === "pt") return pt_social_compat_mode_dedicated_hint(inputs)
	if (locale === "ru") return ru_social_compat_mode_dedicated_hint(inputs)
	if (locale === "sv") return sv_social_compat_mode_dedicated_hint(inputs)
	if (locale === "tr") return tr_social_compat_mode_dedicated_hint(inputs)
	if (locale === "zh") return zh_social_compat_mode_dedicated_hint(inputs)
	if (locale === "ja") return ja_social_compat_mode_dedicated_hint(inputs)
	return en_social_compat_mode_dedicated_hint(inputs)
});
