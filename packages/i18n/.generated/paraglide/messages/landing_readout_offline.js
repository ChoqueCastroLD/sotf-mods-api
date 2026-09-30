/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Landing_Readout_OfflineInputs */

const en_landing_readout_offline = /** @type {(inputs: Landing_Readout_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal lost: showing the last readout`)
};

const es_landing_readout_offline = /** @type {(inputs: Landing_Readout_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin señal: se muestra la última lectura`)
};

const de_landing_readout_offline = /** @type {(inputs: Landing_Readout_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal verloren: letzte Messung wird angezeigt`)
};

const fr_landing_readout_offline = /** @type {(inputs: Landing_Readout_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signal perdu : dernier relevé affiché`)
};

const it_landing_readout_offline = /** @type {(inputs: Landing_Readout_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnale perso: ultima lettura mostrata`)
};

const nl_landing_readout_offline = /** @type {(inputs: Landing_Readout_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signaal kwijt: laatste meting wordt getoond`)
};

const pl_landing_readout_offline = /** @type {(inputs: Landing_Readout_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utracono sygnał: pokazujemy ostatni odczyt`)
};

const pt_landing_readout_offline = /** @type {(inputs: Landing_Readout_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinal perdido: mostrando a última leitura`)
};

const ru_landing_readout_offline = /** @type {(inputs: Landing_Readout_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сигнал потерян: показаны последние данные`)
};

const sv_landing_readout_offline = /** @type {(inputs: Landing_Readout_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Signalen förlorad: visar senaste avläsningen`)
};

const tr_landing_readout_offline = /** @type {(inputs: Landing_Readout_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sinyal kayboldu: son okuma gösteriliyor`)
};

const zh_landing_readout_offline = /** @type {(inputs: Landing_Readout_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信号丢失：显示上一次读数`)
};

const ja_landing_readout_offline = /** @type {(inputs: Landing_Readout_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信号が途切れました：前回の値を表示中`)
};

/**
* | output |
* | --- |
* | "Signal lost: showing the last readout" |
*
* @param {Landing_Readout_OfflineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_readout_offline = /** @type {((inputs?: Landing_Readout_OfflineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Readout_OfflineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_readout_offline(inputs)
	if (locale === "de") return de_landing_readout_offline(inputs)
	if (locale === "fr") return fr_landing_readout_offline(inputs)
	if (locale === "it") return it_landing_readout_offline(inputs)
	if (locale === "nl") return nl_landing_readout_offline(inputs)
	if (locale === "pl") return pl_landing_readout_offline(inputs)
	if (locale === "pt") return pt_landing_readout_offline(inputs)
	if (locale === "ru") return ru_landing_readout_offline(inputs)
	if (locale === "sv") return sv_landing_readout_offline(inputs)
	if (locale === "tr") return tr_landing_readout_offline(inputs)
	if (locale === "zh") return zh_landing_readout_offline(inputs)
	if (locale === "ja") return ja_landing_readout_offline(inputs)
	return en_landing_readout_offline(inputs)
});
