/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Item_Auto_DependencyInputs */

const en_kits_item_auto_dependency = /** @type {(inputs: Kits_Item_Auto_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependency, added automatically`)
};

const es_kits_item_auto_dependency = /** @type {(inputs: Kits_Item_Auto_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependencia, añadida automáticamente`)
};

const de_kits_item_auto_dependency = /** @type {(inputs: Kits_Item_Auto_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abhängigkeit, automatisch hinzugefügt`)
};

const fr_kits_item_auto_dependency = /** @type {(inputs: Kits_Item_Auto_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dépendance ajoutée automatiquement`)
};

const it_kits_item_auto_dependency = /** @type {(inputs: Kits_Item_Auto_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dipendenza aggiunta automaticamente`)
};

const nl_kits_item_auto_dependency = /** @type {(inputs: Kits_Item_Auto_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afhankelijkheid, automatisch toegevoegd`)
};

const pl_kits_item_auto_dependency = /** @type {(inputs: Kits_Item_Auto_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zależność dodana automatycznie`)
};

const pt_kits_item_auto_dependency = /** @type {(inputs: Kits_Item_Auto_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dependência adicionada automaticamente`)
};

const ru_kits_item_auto_dependency = /** @type {(inputs: Kits_Item_Auto_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Зависимость, добавлена автоматически`)
};

const sv_kits_item_auto_dependency = /** @type {(inputs: Kits_Item_Auto_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beroende, tillagt automatiskt`)
};

const tr_kits_item_auto_dependency = /** @type {(inputs: Kits_Item_Auto_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağımlılık, otomatik eklendi`)
};

const zh_kits_item_auto_dependency = /** @type {(inputs: Kits_Item_Auto_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依赖项，自动添加`)
};

const ja_kits_item_auto_dependency = /** @type {(inputs: Kits_Item_Auto_DependencyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`依存 MOD（自動追加）`)
};

/**
* | output |
* | --- |
* | "Dependency, added automatically" |
*
* @param {Kits_Item_Auto_DependencyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_item_auto_dependency = /** @type {((inputs?: Kits_Item_Auto_DependencyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Item_Auto_DependencyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_item_auto_dependency(inputs)
	if (locale === "de") return de_kits_item_auto_dependency(inputs)
	if (locale === "fr") return fr_kits_item_auto_dependency(inputs)
	if (locale === "it") return it_kits_item_auto_dependency(inputs)
	if (locale === "nl") return nl_kits_item_auto_dependency(inputs)
	if (locale === "pl") return pl_kits_item_auto_dependency(inputs)
	if (locale === "pt") return pt_kits_item_auto_dependency(inputs)
	if (locale === "ru") return ru_kits_item_auto_dependency(inputs)
	if (locale === "sv") return sv_kits_item_auto_dependency(inputs)
	if (locale === "tr") return tr_kits_item_auto_dependency(inputs)
	if (locale === "zh") return zh_kits_item_auto_dependency(inputs)
	if (locale === "ja") return ja_kits_item_auto_dependency(inputs)
	return en_kits_item_auto_dependency(inputs)
});
