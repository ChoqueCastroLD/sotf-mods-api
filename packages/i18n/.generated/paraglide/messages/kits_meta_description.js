/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, curator: NonNullable<unknown>, count: NonNullable<unknown>, mods: NonNullable<unknown> }} Kits_Meta_DescriptionInputs */

const en_kits_meta_description = /** @type {(inputs: Kits_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: a Sons of the Forest mod kit by ${i?.curator} with ${count__number} item (${i?.mods}). Dependencies included, free direct downloads.`);
	return /** @type {LocalizedString} */ (`${i?.name}: a Sons of the Forest mod kit by ${i?.curator} with ${count__number} items (${i?.mods}). Dependencies included, free direct downloads.`)
	
};

const es_kits_meta_description = /** @type {(inputs: Kits_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: kit de mods de Sons of the Forest de ${i?.curator} con ${count__number} elemento (${i?.mods}). Dependencias incluidas y descargas directas gratis.`);
	return /** @type {LocalizedString} */ (`${i?.name}: kit de mods de Sons of the Forest de ${i?.curator} con ${count__number} elementos (${i?.mods}). Dependencias incluidas y descargas directas gratis.`)
	
};

const de_kits_meta_description = /** @type {(inputs: Kits_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: Mod-Kit für Sons of the Forest von ${i?.curator} mit ${count__number} Eintrag (${i?.mods}). Mit Abhängigkeiten, kostenlose Direktdownloads.`);
	return /** @type {LocalizedString} */ (`${i?.name}: Mod-Kit für Sons of the Forest von ${i?.curator} mit ${count__number} Einträgen (${i?.mods}). Mit Abhängigkeiten, kostenlose Direktdownloads.`)
	
};

const fr_kits_meta_description = /** @type {(inputs: Kits_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name} : kit de mods pour Sons of the Forest de ${i?.curator} avec ${count__number} élément (${i?.mods}). Dépendances incluses, téléchargements directs et gratuits.`);
	return /** @type {LocalizedString} */ (`${i?.name} : kit de mods pour Sons of the Forest de ${i?.curator} avec ${count__number} éléments (${i?.mods}). Dépendances incluses, téléchargements directs et gratuits.`)
	
};

const it_kits_meta_description = /** @type {(inputs: Kits_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: kit di mod per Sons of the Forest di ${i?.curator} con ${count__number} elemento (${i?.mods}). Dipendenze incluse, download diretti e gratuiti.`);
	return /** @type {LocalizedString} */ (`${i?.name}: kit di mod per Sons of the Forest di ${i?.curator} con ${count__number} elementi (${i?.mods}). Dipendenze incluse, download diretti e gratuiti.`)
	
};

const nl_kits_meta_description = /** @type {(inputs: Kits_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: modkit voor Sons of the Forest van ${i?.curator} met ${count__number} item (${i?.mods}). Inclusief afhankelijkheden, gratis directe downloads.`);
	return /** @type {LocalizedString} */ (`${i?.name}: modkit voor Sons of the Forest van ${i?.curator} met ${count__number} items (${i?.mods}). Inclusief afhankelijkheden, gratis directe downloads.`)
	
};

const pl_kits_meta_description = /** @type {(inputs: Kits_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: zestaw modów do Sons of the Forest od ${i?.curator} – ${count__number} element (${i?.mods}). Z zależnościami, darmowe bezpośrednie pobieranie.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: zestaw modów do Sons of the Forest od ${i?.curator} – ${count__number} elementy (${i?.mods}). Z zależnościami, darmowe bezpośrednie pobieranie.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: zestaw modów do Sons of the Forest od ${i?.curator} – ${count__number} elementów (${i?.mods}). Z zależnościami, darmowe bezpośrednie pobieranie.`);
	return /** @type {LocalizedString} */ (`${i?.name}: zestaw modów do Sons of the Forest od ${i?.curator} – ${count__number} elementu (${i?.mods}). Z zależnościami, darmowe bezpośrednie pobieranie.`)
	
};

const pt_kits_meta_description = /** @type {(inputs: Kits_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: kit de mods de Sons of the Forest de ${i?.curator} com ${count__number} item (${i?.mods}). Dependências incluídas, downloads diretos e grátis.`);
	return /** @type {LocalizedString} */ (`${i?.name}: kit de mods de Sons of the Forest de ${i?.curator} com ${count__number} itens (${i?.mods}). Dependências incluídas, downloads diretos e grátis.`)
	
};

const ru_kits_meta_description = /** @type {(inputs: Kits_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: набор модов для Sons of the Forest от ${i?.curator}, ${count__number} элемент (${i?.mods}). С зависимостями, бесплатные прямые загрузки.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${i?.name}: набор модов для Sons of the Forest от ${i?.curator}, ${count__number} элемента (${i?.mods}). С зависимостями, бесплатные прямые загрузки.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${i?.name}: набор модов для Sons of the Forest от ${i?.curator}, ${count__number} элементов (${i?.mods}). С зависимостями, бесплатные прямые загрузки.`);
	return /** @type {LocalizedString} */ (`${i?.name}: набор модов для Sons of the Forest от ${i?.curator}, ${count__number} элемента (${i?.mods}). С зависимостями, бесплатные прямые загрузки.`)
	
};

const sv_kits_meta_description = /** @type {(inputs: Kits_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: moddkit för Sons of the Forest av ${i?.curator} med ${count__number} objekt (${i?.mods}). Beroenden ingår, gratis direktnedladdningar.`);
	return /** @type {LocalizedString} */ (`${i?.name}: moddkit för Sons of the Forest av ${i?.curator} med ${count__number} objekt (${i?.mods}). Beroenden ingår, gratis direktnedladdningar.`)
	
};

const tr_kits_meta_description = /** @type {(inputs: Kits_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${i?.name}: ${i?.curator} tarafından hazırlanan, ${count__number} öğe içeren Sons of the Forest mod kiti (${i?.mods}). Bağımlılıklar dahil, ücretsiz doğrudan indirme.`);
	return /** @type {LocalizedString} */ (`${i?.name}: ${i?.curator} tarafından hazırlanan, ${count__number} öğe içeren Sons of the Forest mod kiti (${i?.mods}). Bağımlılıklar dahil, ücretsiz doğrudan indirme.`)
	
};

const zh_kits_meta_description = /** @type {(inputs: Kits_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：${i?.curator} 整理的 Sons of the Forest 模组套装，共 ${count__number} 项（${i?.mods}）。自带依赖，免费直链下载。`)
};

const ja_kits_meta_description = /** @type {(inputs: Kits_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${i?.name}：${i?.curator} さんによる Sons of the Forest の MOD キット（${count__number} 件：${i?.mods}）。依存 MOD 込み、無料で直接ダウンロード。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{name}: a Sons of the Forest mod kit by {curator} with {count__number} item ({mods}). Dependencies included, free direct downloads." |
* | * | "{name}: a Sons of the Forest mod kit by {curator} with {count__number} items ({mods}). Dependencies included, free direct downloads." |
*
* @param {Kits_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_meta_description = /** @type {((inputs: Kits_Meta_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Meta_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_meta_description(inputs)
	if (locale === "de") return de_kits_meta_description(inputs)
	if (locale === "fr") return fr_kits_meta_description(inputs)
	if (locale === "it") return it_kits_meta_description(inputs)
	if (locale === "nl") return nl_kits_meta_description(inputs)
	if (locale === "pl") return pl_kits_meta_description(inputs)
	if (locale === "pt") return pt_kits_meta_description(inputs)
	if (locale === "ru") return ru_kits_meta_description(inputs)
	if (locale === "sv") return sv_kits_meta_description(inputs)
	if (locale === "tr") return tr_kits_meta_description(inputs)
	if (locale === "zh") return zh_kits_meta_description(inputs)
	if (locale === "ja") return ja_kits_meta_description(inputs)
	return en_kits_meta_description(inputs)
});
