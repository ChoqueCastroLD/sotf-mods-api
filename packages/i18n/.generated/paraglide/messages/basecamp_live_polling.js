/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Live_PollingInputs */

const en_basecamp_live_polling = /** @type {(inputs: Basecamp_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking every minute`)
};

const es_basecamp_live_polling = /** @type {(inputs: Basecamp_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprobando cada minuto`)
};

const de_basecamp_live_polling = /** @type {(inputs: Basecamp_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüfe jede Minute`)
};

const fr_basecamp_live_polling = /** @type {(inputs: Basecamp_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérification chaque minute`)
};

const it_basecamp_live_polling = /** @type {(inputs: Basecamp_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controllo ogni minuto`)
};

const nl_basecamp_live_polling = /** @type {(inputs: Basecamp_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elke minuut controleren`)
};

const pl_basecamp_live_polling = /** @type {(inputs: Basecamp_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdzanie co minutę`)
};

const pt_basecamp_live_polling = /** @type {(inputs: Basecamp_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificando a cada minuto`)
};

const ru_basecamp_live_polling = /** @type {(inputs: Basecamp_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверка раз в минуту`)
};

const sv_basecamp_live_polling = /** @type {(inputs: Basecamp_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollerar varje minut`)
};

const tr_basecamp_live_polling = /** @type {(inputs: Basecamp_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dakikada bir kontrol ediliyor`)
};

const zh_basecamp_live_polling = /** @type {(inputs: Basecamp_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每分钟检查一次`)
};

const ja_basecamp_live_polling = /** @type {(inputs: Basecamp_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`1 分ごとに確認中`)
};

/**
* | output |
* | --- |
* | "Checking every minute" |
*
* @param {Basecamp_Live_PollingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_live_polling = /** @type {((inputs?: Basecamp_Live_PollingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Live_PollingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_live_polling(inputs)
	if (locale === "de") return de_basecamp_live_polling(inputs)
	if (locale === "fr") return fr_basecamp_live_polling(inputs)
	if (locale === "it") return it_basecamp_live_polling(inputs)
	if (locale === "nl") return nl_basecamp_live_polling(inputs)
	if (locale === "pl") return pl_basecamp_live_polling(inputs)
	if (locale === "pt") return pt_basecamp_live_polling(inputs)
	if (locale === "ru") return ru_basecamp_live_polling(inputs)
	if (locale === "sv") return sv_basecamp_live_polling(inputs)
	if (locale === "tr") return tr_basecamp_live_polling(inputs)
	if (locale === "zh") return zh_basecamp_live_polling(inputs)
	if (locale === "ja") return ja_basecamp_live_polling(inputs)
	return en_basecamp_live_polling(inputs)
});
