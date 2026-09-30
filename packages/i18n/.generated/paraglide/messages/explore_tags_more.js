/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Explore_Tags_MoreInputs */

const en_explore_tags_more = /** @type {(inputs: Explore_Tags_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} more tag`);
	return /** @type {LocalizedString} */ (`${count__number} more tags`)
	
};

const es_explore_tags_more = /** @type {(inputs: Explore_Tags_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} etiqueta más`);
	return /** @type {LocalizedString} */ (`${count__number} etiquetas más`)
	
};

const de_explore_tags_more = /** @type {(inputs: Explore_Tags_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} weiterer Tag`);
	return /** @type {LocalizedString} */ (`${count__number} weitere Tags`)
	
};

const fr_explore_tags_more = /** @type {(inputs: Explore_Tags_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} tag de plus`);
	return /** @type {LocalizedString} */ (`${count__number} tags de plus`)
	
};

const it_explore_tags_more = /** @type {(inputs: Explore_Tags_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} altro tag`);
	return /** @type {LocalizedString} */ (`altri ${count__number} tag`)
	
};

const nl_explore_tags_more = /** @type {(inputs: Explore_Tags_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nog ${count__number} tag`);
	return /** @type {LocalizedString} */ (`Nog ${count__number} tags`)
	
};

const pl_explore_tags_more = /** @type {(inputs: Explore_Tags_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Jeszcze ${count__number} tag`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Jeszcze ${count__number} tagi`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Jeszcze ${count__number} tagów`);
	return /** @type {LocalizedString} */ (`Jeszcze ${count__number} tagu`)
	
};

const pt_explore_tags_more = /** @type {(inputs: Explore_Tags_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Mais ${count__number} tag`);
	return /** @type {LocalizedString} */ (`Mais ${count__number} tags`)
	
};

const ru_explore_tags_more = /** @type {(inputs: Explore_Tags_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Ещё ${count__number} тег`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Ещё ${count__number} тега`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Ещё ${count__number} тегов`);
	return /** @type {LocalizedString} */ (`Ещё ${count__number} тега`)
	
};

const sv_explore_tags_more = /** @type {(inputs: Explore_Tags_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} tagg till`);
	return /** @type {LocalizedString} */ (`${count__number} taggar till`)
	
};

const tr_explore_tags_more = /** @type {(inputs: Explore_Tags_MoreInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} etiket daha`);
	return /** @type {LocalizedString} */ (`${count__number} etiket daha`)
	
};

const zh_explore_tags_more = /** @type {(inputs: Explore_Tags_MoreInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`另外 ${count__number} 个标签`)
};

const ja_explore_tags_more = /** @type {(inputs: Explore_Tags_MoreInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`ほか ${count__number} 件のタグ`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} more tag" |
* | * | "{count__number} more tags" |
*
* @param {Explore_Tags_MoreInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tags_more = /** @type {((inputs: Explore_Tags_MoreInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tags_MoreInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tags_more(inputs)
	if (locale === "de") return de_explore_tags_more(inputs)
	if (locale === "fr") return fr_explore_tags_more(inputs)
	if (locale === "it") return it_explore_tags_more(inputs)
	if (locale === "nl") return nl_explore_tags_more(inputs)
	if (locale === "pl") return pl_explore_tags_more(inputs)
	if (locale === "pt") return pt_explore_tags_more(inputs)
	if (locale === "ru") return ru_explore_tags_more(inputs)
	if (locale === "sv") return sv_explore_tags_more(inputs)
	if (locale === "tr") return tr_explore_tags_more(inputs)
	if (locale === "zh") return zh_explore_tags_more(inputs)
	if (locale === "ja") return ja_explore_tags_more(inputs)
	return en_explore_tags_more(inputs)
});
