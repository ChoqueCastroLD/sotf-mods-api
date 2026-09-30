/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Limits_DescriptionInputs */

const en_admin_limits_description = /** @type {(inputs: Admin_Limits_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Overrides of the built-in limits per bucket. Buckets without an override keep their default.`)
};

const es_admin_limits_description = /** @type {(inputs: Admin_Limits_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sustituciones de los límites predeterminados por grupo. Los grupos sin sustitución mantienen su valor por defecto.`)
};

const de_admin_limits_description = /** @type {(inputs: Admin_Limits_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abweichungen von den eingebauten Limits pro Bereich. Bereiche ohne Abweichung behalten ihren Standard.`)
};

const fr_admin_limits_description = /** @type {(inputs: Admin_Limits_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Remplacements des limites intégrées par groupe. Les groupes sans remplacement gardent leur valeur par défaut.`)
};

const it_admin_limits_description = /** @type {(inputs: Admin_Limits_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sostituzioni dei limiti predefiniti per gruppo. I gruppi senza sostituzione mantengono il valore predefinito.`)
};

const nl_admin_limits_description = /** @type {(inputs: Admin_Limits_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afwijkingen van de ingebouwde limieten per groep. Groepen zonder afwijking houden hun standaard.`)
};

const pl_admin_limits_description = /** @type {(inputs: Admin_Limits_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmiany wbudowanych limitów dla poszczególnych grup. Grupy bez zmiany zachowują wartość domyślną.`)
};

const pt_admin_limits_description = /** @type {(inputs: Admin_Limits_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Substituições dos limites padrão por grupo. Grupos sem substituição mantêm o padrão.`)
};

const ru_admin_limits_description = /** @type {(inputs: Admin_Limits_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переопределения встроенных лимитов по группам. Группы без переопределения используют значение по умолчанию.`)
};

const sv_admin_limits_description = /** @type {(inputs: Admin_Limits_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åsidosättningar av de inbyggda gränserna per grupp. Grupper utan åsidosättning behåller sin standard.`)
};

const tr_admin_limits_description = /** @type {(inputs: Admin_Limits_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yerleşik sınırların gruba göre geçersiz kılınması. Geçersiz kılınmayan gruplar varsayılanlarını korur.`)
};

const zh_admin_limits_description = /** @type {(inputs: Admin_Limits_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`按分组覆盖内置限制。没有覆盖的分组使用默认值。`)
};

const ja_admin_limits_description = /** @type {(inputs: Admin_Limits_DescriptionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`グループごとに組み込みの制限を上書きします。上書きのないグループは既定値のままです。`)
};

/**
* | output |
* | --- |
* | "Overrides of the built-in limits per bucket. Buckets without an override keep their default." |
*
* @param {Admin_Limits_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_limits_description = /** @type {((inputs?: Admin_Limits_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Limits_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_limits_description(inputs)
	if (locale === "de") return de_admin_limits_description(inputs)
	if (locale === "fr") return fr_admin_limits_description(inputs)
	if (locale === "it") return it_admin_limits_description(inputs)
	if (locale === "nl") return nl_admin_limits_description(inputs)
	if (locale === "pl") return pl_admin_limits_description(inputs)
	if (locale === "pt") return pt_admin_limits_description(inputs)
	if (locale === "ru") return ru_admin_limits_description(inputs)
	if (locale === "sv") return sv_admin_limits_description(inputs)
	if (locale === "tr") return tr_admin_limits_description(inputs)
	if (locale === "zh") return zh_admin_limits_description(inputs)
	if (locale === "ja") return ja_admin_limits_description(inputs)
	return en_admin_limits_description(inputs)
});
