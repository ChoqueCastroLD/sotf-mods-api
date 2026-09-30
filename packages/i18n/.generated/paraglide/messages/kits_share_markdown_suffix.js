/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, code: NonNullable<unknown> }} Kits_Share_Markdown_SuffixInputs */

const en_kits_share_markdown_suffix = /** @type {(inputs: Kits_Share_Markdown_SuffixInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod · code ${i?.code}`);
	return /** @type {LocalizedString} */ (`${count__number} mods · code ${i?.code}`)
	
};

const es_kits_share_markdown_suffix = /** @type {(inputs: Kits_Share_Markdown_SuffixInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod · código ${i?.code}`);
	return /** @type {LocalizedString} */ (`${count__number} mods · código ${i?.code}`)
	
};

const de_kits_share_markdown_suffix = /** @type {(inputs: Kits_Share_Markdown_SuffixInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mod · Code ${i?.code}`);
	return /** @type {LocalizedString} */ (`${count__number} Mods · Code ${i?.code}`)
	
};

const fr_kits_share_markdown_suffix = /** @type {(inputs: Kits_Share_Markdown_SuffixInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod · code ${i?.code}`);
	return /** @type {LocalizedString} */ (`${count__number} mods · code ${i?.code}`)
	
};

const it_kits_share_markdown_suffix = /** @type {(inputs: Kits_Share_Markdown_SuffixInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod · codice ${i?.code}`);
	return /** @type {LocalizedString} */ (`${count__number} mod · codice ${i?.code}`)
	
};

const nl_kits_share_markdown_suffix = /** @type {(inputs: Kits_Share_Markdown_SuffixInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod · code ${i?.code}`);
	return /** @type {LocalizedString} */ (`${count__number} mods · code ${i?.code}`)
	
};

const pl_kits_share_markdown_suffix = /** @type {(inputs: Kits_Share_Markdown_SuffixInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod · kod ${i?.code}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} mody · kod ${i?.code}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} modów · kod ${i?.code}`);
	return /** @type {LocalizedString} */ (`${count__number} moda · kod ${i?.code}`)
	
};

const pt_kits_share_markdown_suffix = /** @type {(inputs: Kits_Share_Markdown_SuffixInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod · código ${i?.code}`);
	return /** @type {LocalizedString} */ (`${count__number} mods · código ${i?.code}`)
	
};

const ru_kits_share_markdown_suffix = /** @type {(inputs: Kits_Share_Markdown_SuffixInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мод · код ${i?.code}`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мода · код ${i?.code}`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} модов · код ${i?.code}`);
	return /** @type {LocalizedString} */ (`${count__number} мода · код ${i?.code}`)
	
};

const sv_kits_share_markdown_suffix = /** @type {(inputs: Kits_Share_Markdown_SuffixInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modd · kod ${i?.code}`);
	return /** @type {LocalizedString} */ (`${count__number} moddar · kod ${i?.code}`)
	
};

const tr_kits_share_markdown_suffix = /** @type {(inputs: Kits_Share_Markdown_SuffixInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod · kod ${i?.code}`);
	return /** @type {LocalizedString} */ (`${count__number} mod · kod ${i?.code}`)
	
};

const zh_kits_share_markdown_suffix = /** @type {(inputs: Kits_Share_Markdown_SuffixInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个模组 · 代码 ${i?.code}`)
};

const ja_kits_share_markdown_suffix = /** @type {(inputs: Kits_Share_Markdown_SuffixInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`MOD ${count__number} 件 · コード ${i?.code}`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} mod · code {code}" |
* | * | "{count__number} mods · code {code}" |
*
* @param {Kits_Share_Markdown_SuffixInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_share_markdown_suffix = /** @type {((inputs: Kits_Share_Markdown_SuffixInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Share_Markdown_SuffixInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_share_markdown_suffix(inputs)
	if (locale === "de") return de_kits_share_markdown_suffix(inputs)
	if (locale === "fr") return fr_kits_share_markdown_suffix(inputs)
	if (locale === "it") return it_kits_share_markdown_suffix(inputs)
	if (locale === "nl") return nl_kits_share_markdown_suffix(inputs)
	if (locale === "pl") return pl_kits_share_markdown_suffix(inputs)
	if (locale === "pt") return pt_kits_share_markdown_suffix(inputs)
	if (locale === "ru") return ru_kits_share_markdown_suffix(inputs)
	if (locale === "sv") return sv_kits_share_markdown_suffix(inputs)
	if (locale === "tr") return tr_kits_share_markdown_suffix(inputs)
	if (locale === "zh") return zh_kits_share_markdown_suffix(inputs)
	if (locale === "ja") return ja_kits_share_markdown_suffix(inputs)
	return en_kits_share_markdown_suffix(inputs)
});
