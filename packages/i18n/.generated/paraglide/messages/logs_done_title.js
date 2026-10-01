/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Done_TitleInputs */

const en_logs_done_title = /** @type {(inputs: Logs_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your log is ready`)
};

const es_logs_done_title = /** @type {(inputs: Logs_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu log está listo`)
};

const de_logs_done_title = /** @type {(inputs: Logs_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein Log ist bereit`)
};

const fr_logs_done_title = /** @type {(inputs: Logs_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre log est prêt`)
};

const it_logs_done_title = /** @type {(inputs: Logs_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo log è pronto`)
};

const nl_logs_done_title = /** @type {(inputs: Logs_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je log is klaar`)
};

const pl_logs_done_title = /** @type {(inputs: Logs_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój log jest gotowy`)
};

const pt_logs_done_title = /** @type {(inputs: Logs_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O seu log está pronto`)
};

const ru_logs_done_title = /** @type {(inputs: Logs_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш лог готов`)
};

const sv_logs_done_title = /** @type {(inputs: Logs_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din logg är klar`)
};

const tr_logs_done_title = /** @type {(inputs: Logs_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Logunuz hazır`)
};

const zh_logs_done_title = /** @type {(inputs: Logs_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的日志已就绪`)
};

const ja_logs_done_title = /** @type {(inputs: Logs_Done_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ログの準備ができました`)
};

/**
* | output |
* | --- |
* | "Your log is ready" |
*
* @param {Logs_Done_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_done_title = /** @type {((inputs?: Logs_Done_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Done_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_done_title(inputs)
	if (locale === "de") return de_logs_done_title(inputs)
	if (locale === "fr") return fr_logs_done_title(inputs)
	if (locale === "it") return it_logs_done_title(inputs)
	if (locale === "nl") return nl_logs_done_title(inputs)
	if (locale === "pl") return pl_logs_done_title(inputs)
	if (locale === "pt") return pt_logs_done_title(inputs)
	if (locale === "ru") return ru_logs_done_title(inputs)
	if (locale === "sv") return sv_logs_done_title(inputs)
	if (locale === "tr") return tr_logs_done_title(inputs)
	if (locale === "zh") return zh_logs_done_title(inputs)
	if (locale === "ja") return ja_logs_done_title(inputs)
	return en_logs_done_title(inputs)
});
