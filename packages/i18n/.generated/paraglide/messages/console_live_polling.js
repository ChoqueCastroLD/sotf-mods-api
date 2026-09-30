/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Live_PollingInputs */

const en_console_live_polling = /** @type {(inputs: Console_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live updates paused. Checking every minute.`)
};

const es_console_live_polling = /** @type {(inputs: Console_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Actualizaciones en vivo en pausa. Comprobamos cada minuto.`)
};

const de_console_live_polling = /** @type {(inputs: Console_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live-Updates pausiert. Wir prüfen jede Minute.`)
};

const fr_console_live_polling = /** @type {(inputs: Console_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mises à jour en direct en pause. Vérification toutes les minutes.`)
};

const it_console_live_polling = /** @type {(inputs: Console_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aggiornamenti in diretta in pausa. Controlliamo ogni minuto.`)
};

const nl_console_live_polling = /** @type {(inputs: Console_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Live-updates gepauzeerd. We kijken elke minuut.`)
};

const pl_console_live_polling = /** @type {(inputs: Console_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktualizacje na żywo wstrzymane. Sprawdzamy co minutę.`)
};

const pt_console_live_polling = /** @type {(inputs: Console_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atualizações ao vivo pausadas. Verificando a cada minuto.`)
};

const ru_console_live_polling = /** @type {(inputs: Console_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Живые обновления на паузе. Проверяем раз в минуту.`)
};

const sv_console_live_polling = /** @type {(inputs: Console_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Liveuppdateringar pausade. Vi kollar varje minut.`)
};

const tr_console_live_polling = /** @type {(inputs: Console_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Canlı güncellemeler duraklatıldı. Her dakika kontrol ediyoruz.`)
};

const zh_console_live_polling = /** @type {(inputs: Console_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`实时更新已暂停，每分钟检查一次。`)
};

const ja_console_live_polling = /** @type {(inputs: Console_Live_PollingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ライブ更新を一時停止中です。1分ごとに確認します。`)
};

/**
* | output |
* | --- |
* | "Live updates paused. Checking every minute." |
*
* @param {Console_Live_PollingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_live_polling = /** @type {((inputs?: Console_Live_PollingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Live_PollingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_live_polling(inputs)
	if (locale === "de") return de_console_live_polling(inputs)
	if (locale === "fr") return fr_console_live_polling(inputs)
	if (locale === "it") return it_console_live_polling(inputs)
	if (locale === "nl") return nl_console_live_polling(inputs)
	if (locale === "pl") return pl_console_live_polling(inputs)
	if (locale === "pt") return pt_console_live_polling(inputs)
	if (locale === "ru") return ru_console_live_polling(inputs)
	if (locale === "sv") return sv_console_live_polling(inputs)
	if (locale === "tr") return tr_console_live_polling(inputs)
	if (locale === "zh") return zh_console_live_polling(inputs)
	if (locale === "ja") return ja_console_live_polling(inputs)
	return en_console_live_polling(inputs)
});
