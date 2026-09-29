/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Env_PreflightInputs */

const en_common_env_preflight = /** @type {(inputs: Common_Env_PreflightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preflight: live data, not public yet.`)
};

const es_common_env_preflight = /** @type {(inputs: Common_Env_PreflightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preflight: datos reales, aún no es público.`)
};

const de_common_env_preflight = /** @type {(inputs: Common_Env_PreflightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preflight: echte Daten, noch nicht öffentlich.`)
};

const fr_common_env_preflight = /** @type {(inputs: Common_Env_PreflightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Préproduction : données réelles, pas encore publique.`)
};

const it_common_env_preflight = /** @type {(inputs: Common_Env_PreflightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preflight: dati reali, non ancora pubblico.`)
};

const nl_common_env_preflight = /** @type {(inputs: Common_Env_PreflightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preflight: echte gegevens, nog niet openbaar.`)
};

const pl_common_env_preflight = /** @type {(inputs: Common_Env_PreflightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preflight: prawdziwe dane, jeszcze niepubliczne.`)
};

const pt_common_env_preflight = /** @type {(inputs: Common_Env_PreflightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preflight: dados reais, ainda não é público.`)
};

const ru_common_env_preflight = /** @type {(inputs: Common_Env_PreflightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Предрелиз: реальные данные, пока не публично.`)
};

const sv_common_env_preflight = /** @type {(inputs: Common_Env_PreflightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förhandsversion: riktiga data, inte offentlig än.`)
};

const tr_common_env_preflight = /** @type {(inputs: Common_Env_PreflightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ön yayın: gerçek veriler, henüz herkese açık değil.`)
};

const zh_common_env_preflight = /** @type {(inputs: Common_Env_PreflightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`预发布：真实数据，尚未公开。`)
};

const ja_common_env_preflight = /** @type {(inputs: Common_Env_PreflightInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレフライト：実データを使用、まだ非公開です。`)
};

/**
* | output |
* | --- |
* | "Preflight: live data, not public yet." |
*
* @param {Common_Env_PreflightInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_env_preflight = /** @type {((inputs?: Common_Env_PreflightInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Env_PreflightInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_env_preflight(inputs)
	if (locale === "de") return de_common_env_preflight(inputs)
	if (locale === "fr") return fr_common_env_preflight(inputs)
	if (locale === "it") return it_common_env_preflight(inputs)
	if (locale === "nl") return nl_common_env_preflight(inputs)
	if (locale === "pl") return pl_common_env_preflight(inputs)
	if (locale === "pt") return pt_common_env_preflight(inputs)
	if (locale === "ru") return ru_common_env_preflight(inputs)
	if (locale === "sv") return sv_common_env_preflight(inputs)
	if (locale === "tr") return tr_common_env_preflight(inputs)
	if (locale === "zh") return zh_common_env_preflight(inputs)
	if (locale === "ja") return ja_common_env_preflight(inputs)
	return en_common_env_preflight(inputs)
});
