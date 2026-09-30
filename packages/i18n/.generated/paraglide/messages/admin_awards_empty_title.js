/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Awards_Empty_TitleInputs */

const en_admin_awards_empty_title = /** @type {(inputs: Admin_Awards_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No awards yet`)
};

const es_admin_awards_empty_title = /** @type {(inputs: Admin_Awards_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún no hay premios`)
};

const de_admin_awards_empty_title = /** @type {(inputs: Admin_Awards_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch keine Auszeichnungen`)
};

const fr_admin_awards_empty_title = /** @type {(inputs: Admin_Awards_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucune récompense pour l’instant`)
};

const it_admin_awards_empty_title = /** @type {(inputs: Admin_Awards_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora nessun premio`)
};

const nl_admin_awards_empty_title = /** @type {(inputs: Admin_Awards_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog geen prijzen`)
};

const pl_admin_awards_empty_title = /** @type {(inputs: Admin_Awards_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie ma jeszcze wyróżnień`)
};

const pt_admin_awards_empty_title = /** @type {(inputs: Admin_Awards_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não há prêmios`)
};

const ru_admin_awards_empty_title = /** @type {(inputs: Admin_Awards_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Наград пока нет`)
};

const sv_admin_awards_empty_title = /** @type {(inputs: Admin_Awards_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga utmärkelser än`)
};

const tr_admin_awards_empty_title = /** @type {(inputs: Admin_Awards_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz ödül yok`)
};

const zh_admin_awards_empty_title = /** @type {(inputs: Admin_Awards_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`还没有奖项`)
};

const ja_admin_awards_empty_title = /** @type {(inputs: Admin_Awards_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アワードはまだありません`)
};

/**
* | output |
* | --- |
* | "No awards yet" |
*
* @param {Admin_Awards_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_awards_empty_title = /** @type {((inputs?: Admin_Awards_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Awards_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_awards_empty_title(inputs)
	if (locale === "de") return de_admin_awards_empty_title(inputs)
	if (locale === "fr") return fr_admin_awards_empty_title(inputs)
	if (locale === "it") return it_admin_awards_empty_title(inputs)
	if (locale === "nl") return nl_admin_awards_empty_title(inputs)
	if (locale === "pl") return pl_admin_awards_empty_title(inputs)
	if (locale === "pt") return pt_admin_awards_empty_title(inputs)
	if (locale === "ru") return ru_admin_awards_empty_title(inputs)
	if (locale === "sv") return sv_admin_awards_empty_title(inputs)
	if (locale === "tr") return tr_admin_awards_empty_title(inputs)
	if (locale === "zh") return zh_admin_awards_empty_title(inputs)
	if (locale === "ja") return ja_admin_awards_empty_title(inputs)
	return en_admin_awards_empty_title(inputs)
});
