/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Unavailable_TitleInputs */

const en_logs_unavailable_title = /** @type {(inputs: Logs_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logs are unavailable`)
};

const es_logs_unavailable_title = /** @type {(inputs: Logs_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los logs no están disponibles`)
};

const de_logs_unavailable_title = /** @type {(inputs: Logs_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logs sind nicht verfügbar`)
};

const fr_logs_unavailable_title = /** @type {(inputs: Logs_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les logs sont indisponibles`)
};

const it_logs_unavailable_title = /** @type {(inputs: Logs_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I log non sono disponibili`)
};

const nl_logs_unavailable_title = /** @type {(inputs: Logs_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logs zijn niet beschikbaar`)
};

const pl_logs_unavailable_title = /** @type {(inputs: Logs_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logi są niedostępne`)
};

const pt_logs_unavailable_title = /** @type {(inputs: Logs_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Os logs estão indisponíveis`)
};

const ru_logs_unavailable_title = /** @type {(inputs: Logs_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Логи недоступны`)
};

const sv_logs_unavailable_title = /** @type {(inputs: Logs_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loggar är inte tillgängliga`)
};

const tr_logs_unavailable_title = /** @type {(inputs: Logs_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loglar kullanılamıyor`)
};

const zh_logs_unavailable_title = /** @type {(inputs: Logs_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`日志功能暂不可用`)
};

const ja_logs_unavailable_title = /** @type {(inputs: Logs_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログを利用できません`)
};

/**
* | output |
* | --- |
* | "Logs are unavailable" |
*
* @param {Logs_Unavailable_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_unavailable_title = /** @type {((inputs?: Logs_Unavailable_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Unavailable_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_unavailable_title(inputs)
	if (locale === "de") return de_logs_unavailable_title(inputs)
	if (locale === "fr") return fr_logs_unavailable_title(inputs)
	if (locale === "it") return it_logs_unavailable_title(inputs)
	if (locale === "nl") return nl_logs_unavailable_title(inputs)
	if (locale === "pl") return pl_logs_unavailable_title(inputs)
	if (locale === "pt") return pt_logs_unavailable_title(inputs)
	if (locale === "ru") return ru_logs_unavailable_title(inputs)
	if (locale === "sv") return sv_logs_unavailable_title(inputs)
	if (locale === "tr") return tr_logs_unavailable_title(inputs)
	if (locale === "zh") return zh_logs_unavailable_title(inputs)
	if (locale === "ja") return ja_logs_unavailable_title(inputs)
	return en_logs_unavailable_title(inputs)
});
