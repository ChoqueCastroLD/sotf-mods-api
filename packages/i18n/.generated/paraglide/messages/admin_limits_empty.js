/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Limits_EmptyInputs */

const en_admin_limits_empty = /** @type {(inputs: Admin_Limits_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No overrides: every bucket uses its default.`)
};

const es_admin_limits_empty = /** @type {(inputs: Admin_Limits_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin sustituciones: todos los grupos usan su valor por defecto.`)
};

const de_admin_limits_empty = /** @type {(inputs: Admin_Limits_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine Abweichungen: Jeder Bereich nutzt seinen Standard.`)
};

const fr_admin_limits_empty = /** @type {(inputs: Admin_Limits_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun remplacement : chaque groupe utilise sa valeur par défaut.`)
};

const it_admin_limits_empty = /** @type {(inputs: Admin_Limits_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessuna sostituzione: ogni gruppo usa il suo valore predefinito.`)
};

const nl_admin_limits_empty = /** @type {(inputs: Admin_Limits_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen afwijkingen: elke groep gebruikt zijn standaard.`)
};

const pl_admin_limits_empty = /** @type {(inputs: Admin_Limits_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak zmian: każda grupa używa wartości domyślnej.`)
};

const pt_admin_limits_empty = /** @type {(inputs: Admin_Limits_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem substituições: todos os grupos usam o padrão.`)
};

const ru_admin_limits_empty = /** @type {(inputs: Admin_Limits_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переопределений нет: все группы используют значения по умолчанию.`)
};

const sv_admin_limits_empty = /** @type {(inputs: Admin_Limits_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga åsidosättningar: varje grupp använder sin standard.`)
};

const tr_admin_limits_empty = /** @type {(inputs: Admin_Limits_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geçersiz kılma yok: her grup kendi varsayılanını kullanıyor.`)
};

const zh_admin_limits_empty = /** @type {(inputs: Admin_Limits_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有覆盖：所有分组都使用默认值。`)
};

const ja_admin_limits_empty = /** @type {(inputs: Admin_Limits_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`上書きはありません。すべてのグループが既定値を使っています。`)
};

/**
* | output |
* | --- |
* | "No overrides: every bucket uses its default." |
*
* @param {Admin_Limits_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_limits_empty = /** @type {((inputs?: Admin_Limits_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Limits_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_limits_empty(inputs)
	if (locale === "de") return de_admin_limits_empty(inputs)
	if (locale === "fr") return fr_admin_limits_empty(inputs)
	if (locale === "it") return it_admin_limits_empty(inputs)
	if (locale === "nl") return nl_admin_limits_empty(inputs)
	if (locale === "pl") return pl_admin_limits_empty(inputs)
	if (locale === "pt") return pt_admin_limits_empty(inputs)
	if (locale === "ru") return ru_admin_limits_empty(inputs)
	if (locale === "sv") return sv_admin_limits_empty(inputs)
	if (locale === "tr") return tr_admin_limits_empty(inputs)
	if (locale === "zh") return zh_admin_limits_empty(inputs)
	if (locale === "ja") return ja_admin_limits_empty(inputs)
	return en_admin_limits_empty(inputs)
});
