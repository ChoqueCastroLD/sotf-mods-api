/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ max: NonNullable<unknown> }} Kits_Items_LimitInputs */

const en_kits_items_limit = /** @type {(inputs: Kits_Items_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A kit holds up to ${i?.max} items, dependencies included.`)
};

const es_kits_items_limit = /** @type {(inputs: Kits_Items_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Un kit admite hasta ${i?.max} elementos, dependencias incluidas.`)
};

const de_kits_items_limit = /** @type {(inputs: Kits_Items_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ein Kit fasst höchstens ${i?.max} Einträge, Abhängigkeiten eingeschlossen.`)
};

const fr_kits_items_limit = /** @type {(inputs: Kits_Items_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Un kit contient au maximum ${i?.max} éléments, dépendances comprises.`)
};

const it_kits_items_limit = /** @type {(inputs: Kits_Items_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Un kit contiene al massimo ${i?.max} elementi, dipendenze incluse.`)
};

const nl_kits_items_limit = /** @type {(inputs: Kits_Items_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Een kit bevat maximaal ${i?.max} items, inclusief afhankelijkheden.`)
};

const pl_kits_items_limit = /** @type {(inputs: Kits_Items_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zestaw mieści maksymalnie ${i?.max} elementów razem z zależnościami.`)
};

const pt_kits_items_limit = /** @type {(inputs: Kits_Items_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Um kit comporta até ${i?.max} itens, dependências incluídas.`)
};

const ru_kits_items_limit = /** @type {(inputs: Kits_Items_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`В наборе может быть до ${i?.max} элементов вместе с зависимостями.`)
};

const sv_kits_items_limit = /** @type {(inputs: Kits_Items_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ett kit rymmer högst ${i?.max} objekt, beroenden inräknade.`)
};

const tr_kits_items_limit = /** @type {(inputs: Kits_Items_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Bir kit, bağımlılıklar dahil en fazla ${i?.max} öğe içerebilir.`)
};

const zh_kits_items_limit = /** @type {(inputs: Kits_Items_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`一个套装最多 ${i?.max} 项（含依赖）。`)
};

const ja_kits_items_limit = /** @type {(inputs: Kits_Items_LimitInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`キットに入れられるのは依存 MOD を含めて最大 ${i?.max} 件です。`)
};

/**
* | output |
* | --- |
* | "A kit holds up to {max} items, dependencies included." |
*
* @param {Kits_Items_LimitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_items_limit = /** @type {((inputs: Kits_Items_LimitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Items_LimitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_items_limit(inputs)
	if (locale === "de") return de_kits_items_limit(inputs)
	if (locale === "fr") return fr_kits_items_limit(inputs)
	if (locale === "it") return it_kits_items_limit(inputs)
	if (locale === "nl") return nl_kits_items_limit(inputs)
	if (locale === "pl") return pl_kits_items_limit(inputs)
	if (locale === "pt") return pt_kits_items_limit(inputs)
	if (locale === "ru") return ru_kits_items_limit(inputs)
	if (locale === "sv") return sv_kits_items_limit(inputs)
	if (locale === "tr") return tr_kits_items_limit(inputs)
	if (locale === "zh") return zh_kits_items_limit(inputs)
	if (locale === "ja") return ja_kits_items_limit(inputs)
	return en_kits_items_limit(inputs)
});
