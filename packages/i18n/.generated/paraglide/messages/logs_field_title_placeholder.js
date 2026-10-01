/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Field_Title_PlaceholderInputs */

const en_logs_field_title_placeholder = /** @type {(inputs: Logs_Field_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crash after loading a save`)
};

const es_logs_field_title_placeholder = /** @type {(inputs: Logs_Field_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cierre inesperado al cargar una partida`)
};

const de_logs_field_title_placeholder = /** @type {(inputs: Logs_Field_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Absturz beim Laden eines Spielstands`)
};

const fr_logs_field_title_placeholder = /** @type {(inputs: Logs_Field_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plantage au chargement d’une sauvegarde`)
};

const it_logs_field_title_placeholder = /** @type {(inputs: Logs_Field_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crash dopo aver caricato un salvataggio`)
};

const nl_logs_field_title_placeholder = /** @type {(inputs: Logs_Field_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crash na het laden van een savegame`)
};

const pl_logs_field_title_placeholder = /** @type {(inputs: Logs_Field_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crash po wczytaniu zapisu`)
};

const pt_logs_field_title_placeholder = /** @type {(inputs: Logs_Field_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Falha ao carregar um jogo guardado`)
};

const ru_logs_field_title_placeholder = /** @type {(inputs: Logs_Field_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вылет после загрузки сохранения`)
};

const sv_logs_field_title_placeholder = /** @type {(inputs: Logs_Field_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krasch när en sparfil laddas`)
};

const tr_logs_field_title_placeholder = /** @type {(inputs: Logs_Field_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kayıt yüklenince çökme`)
};

const zh_logs_field_title_placeholder = /** @type {(inputs: Logs_Field_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`加载存档后崩溃`)
};

const ja_logs_field_title_placeholder = /** @type {(inputs: Logs_Field_Title_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セーブ読み込み後にクラッシュ`)
};

/**
* | output |
* | --- |
* | "Crash after loading a save" |
*
* @param {Logs_Field_Title_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_field_title_placeholder = /** @type {((inputs?: Logs_Field_Title_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Field_Title_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_field_title_placeholder(inputs)
	if (locale === "de") return de_logs_field_title_placeholder(inputs)
	if (locale === "fr") return fr_logs_field_title_placeholder(inputs)
	if (locale === "it") return it_logs_field_title_placeholder(inputs)
	if (locale === "nl") return nl_logs_field_title_placeholder(inputs)
	if (locale === "pl") return pl_logs_field_title_placeholder(inputs)
	if (locale === "pt") return pt_logs_field_title_placeholder(inputs)
	if (locale === "ru") return ru_logs_field_title_placeholder(inputs)
	if (locale === "sv") return sv_logs_field_title_placeholder(inputs)
	if (locale === "tr") return tr_logs_field_title_placeholder(inputs)
	if (locale === "zh") return zh_logs_field_title_placeholder(inputs)
	if (locale === "ja") return ja_logs_field_title_placeholder(inputs)
	return en_logs_field_title_placeholder(inputs)
});
