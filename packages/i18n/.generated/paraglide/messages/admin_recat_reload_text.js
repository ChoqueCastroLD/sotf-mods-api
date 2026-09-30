/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Reload_TextInputs */

const en_admin_recat_reload_text = /** @type {(inputs: Admin_Recat_Reload_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your edits and the imported CSV lines will be lost.`)
};

const es_admin_recat_reload_text = /** @type {(inputs: Admin_Recat_Reload_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se perderán tus cambios y las líneas importadas del CSV.`)
};

const de_admin_recat_reload_text = /** @type {(inputs: Admin_Recat_Reload_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine Änderungen und die importierten CSV-Zeilen gehen verloren.`)
};

const fr_admin_recat_reload_text = /** @type {(inputs: Admin_Recat_Reload_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos modifications et les lignes importées du CSV seront perdues.`)
};

const it_admin_recat_reload_text = /** @type {(inputs: Admin_Recat_Reload_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le tue modifiche e le righe importate dal CSV andranno perse.`)
};

const nl_admin_recat_reload_text = /** @type {(inputs: Admin_Recat_Reload_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je wijzigingen en de geïmporteerde CSV-regels gaan verloren.`)
};

const pl_admin_recat_reload_text = /** @type {(inputs: Admin_Recat_Reload_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje zmiany i zaimportowane wiersze CSV przepadną.`)
};

const pt_admin_recat_reload_text = /** @type {(inputs: Admin_Recat_Reload_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Suas edições e as linhas importadas do CSV serão perdidas.`)
};

const ru_admin_recat_reload_text = /** @type {(inputs: Admin_Recat_Reload_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши правки и импортированные строки CSV пропадут.`)
};

const sv_admin_recat_reload_text = /** @type {(inputs: Admin_Recat_Reload_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina ändringar och de importerade CSV-raderna försvinner.`)
};

const tr_admin_recat_reload_text = /** @type {(inputs: Admin_Recat_Reload_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Düzenlemelerin ve içe aktarılan CSV satırları kaybolur.`)
};

const zh_admin_recat_reload_text = /** @type {(inputs: Admin_Recat_Reload_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的修改和导入的 CSV 行都会丢失。`)
};

const ja_admin_recat_reload_text = /** @type {(inputs: Admin_Recat_Reload_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`編集内容とインポートした CSV の行は失われます。`)
};

/**
* | output |
* | --- |
* | "Your edits and the imported CSV lines will be lost." |
*
* @param {Admin_Recat_Reload_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_reload_text = /** @type {((inputs?: Admin_Recat_Reload_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Reload_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_reload_text(inputs)
	if (locale === "de") return de_admin_recat_reload_text(inputs)
	if (locale === "fr") return fr_admin_recat_reload_text(inputs)
	if (locale === "it") return it_admin_recat_reload_text(inputs)
	if (locale === "nl") return nl_admin_recat_reload_text(inputs)
	if (locale === "pl") return pl_admin_recat_reload_text(inputs)
	if (locale === "pt") return pt_admin_recat_reload_text(inputs)
	if (locale === "ru") return ru_admin_recat_reload_text(inputs)
	if (locale === "sv") return sv_admin_recat_reload_text(inputs)
	if (locale === "tr") return tr_admin_recat_reload_text(inputs)
	if (locale === "zh") return zh_admin_recat_reload_text(inputs)
	if (locale === "ja") return ja_admin_recat_reload_text(inputs)
	return en_admin_recat_reload_text(inputs)
});
