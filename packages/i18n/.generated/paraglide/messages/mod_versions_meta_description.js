/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, name: NonNullable<unknown>, version: NonNullable<unknown> }} Mod_Versions_Meta_DescriptionInputs */

const en_mod_versions_meta_description = /** @type {(inputs: Mod_Versions_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`All ${count__number} version of ${i?.name} for Sons of the Forest, with changelogs, file sizes and compatibility. Latest: v${i?.version}.`);
	return /** @type {LocalizedString} */ (`All ${count__number} versions of ${i?.name} for Sons of the Forest, with changelogs, file sizes and compatibility. Latest: v${i?.version}.`)
	
};

const es_mod_versions_meta_description = /** @type {(inputs: Mod_Versions_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`La ${count__number} versión de ${i?.name} para Sons of the Forest, con notas de cambios, tamaños y compatibilidad. Última: v${i?.version}.`);
	return /** @type {LocalizedString} */ (`Las ${count__number} versiones de ${i?.name} para Sons of the Forest, con notas de cambios, tamaños y compatibilidad. Última: v${i?.version}.`)
	
};

const de_mod_versions_meta_description = /** @type {(inputs: Mod_Versions_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Die ${count__number} Version von ${i?.name} für Sons of the Forest mit Changelogs, Dateigrößen und Kompatibilität. Neueste: v${i?.version}.`);
	return /** @type {LocalizedString} */ (`Alle ${count__number} Versionen von ${i?.name} für Sons of the Forest mit Changelogs, Dateigrößen und Kompatibilität. Neueste: v${i?.version}.`)
	
};

const fr_mod_versions_meta_description = /** @type {(inputs: Mod_Versions_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`La ${count__number} version de ${i?.name} pour Sons of the Forest, avec journaux des modifications, tailles et compatibilité. Dernière : v${i?.version}.`);
	return /** @type {LocalizedString} */ (`Les ${count__number} versions de ${i?.name} pour Sons of the Forest, avec journaux des modifications, tailles et compatibilité. Dernière : v${i?.version}.`)
	
};

const it_mod_versions_meta_description = /** @type {(inputs: Mod_Versions_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`La ${count__number} versione di ${i?.name} per Sons of the Forest, con changelog, dimensioni e compatibilità. Ultima: v${i?.version}.`);
	return /** @type {LocalizedString} */ (`Tutte le ${count__number} versioni di ${i?.name} per Sons of the Forest, con changelog, dimensioni e compatibilità. Ultima: v${i?.version}.`)
	
};

const nl_mod_versions_meta_description = /** @type {(inputs: Mod_Versions_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`De ${count__number} versie van ${i?.name} voor Sons of the Forest, met changelogs, bestandsgroottes en compatibiliteit. Nieuwste: v${i?.version}.`);
	return /** @type {LocalizedString} */ (`Alle ${count__number} versies van ${i?.name} voor Sons of the Forest, met changelogs, bestandsgroottes en compatibiliteit. Nieuwste: v${i?.version}.`)
	
};

const pl_mod_versions_meta_description = /** @type {(inputs: Mod_Versions_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} wersja ${i?.name} do Sons of the Forest z listami zmian, rozmiarami plików i kompatybilnością. Najnowsza: v${i?.version}.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} wersje ${i?.name} do Sons of the Forest z listami zmian, rozmiarami plików i kompatybilnością. Najnowsza: v${i?.version}.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} wersji ${i?.name} do Sons of the Forest z listami zmian, rozmiarami plików i kompatybilnością. Najnowsza: v${i?.version}.`);
	return /** @type {LocalizedString} */ (`${count__number} wersji ${i?.name} do Sons of the Forest z listami zmian, rozmiarami plików i kompatybilnością. Najnowsza: v${i?.version}.`)
	
};

const pt_mod_versions_meta_description = /** @type {(inputs: Mod_Versions_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`A ${count__number} versão de ${i?.name} para Sons of the Forest, com changelogs, tamanhos e compatibilidade. Mais recente: v${i?.version}.`);
	return /** @type {LocalizedString} */ (`Todas as ${count__number} versões de ${i?.name} para Sons of the Forest, com changelogs, tamanhos e compatibilidade. Mais recente: v${i?.version}.`)
	
};

const ru_mod_versions_meta_description = /** @type {(inputs: Mod_Versions_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} версия ${i?.name} для Sons of the Forest со списками изменений, размерами и совместимостью. Последняя: v${i?.version}.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} версии ${i?.name} для Sons of the Forest со списками изменений, размерами и совместимостью. Последняя: v${i?.version}.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} версий ${i?.name} для Sons of the Forest со списками изменений, размерами и совместимостью. Последняя: v${i?.version}.`);
	return /** @type {LocalizedString} */ (`${count__number} версии ${i?.name} для Sons of the Forest со списками изменений, размерами и совместимостью. Последняя: v${i?.version}.`)
	
};

const sv_mod_versions_meta_description = /** @type {(inputs: Mod_Versions_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Den ${count__number} versionen av ${i?.name} till Sons of the Forest, med ändringsloggar, filstorlekar och kompatibilitet. Senaste: v${i?.version}.`);
	return /** @type {LocalizedString} */ (`Alla ${count__number} versioner av ${i?.name} till Sons of the Forest, med ändringsloggar, filstorlekar och kompatibilitet. Senaste: v${i?.version}.`)
	
};

const tr_mod_versions_meta_description = /** @type {(inputs: Mod_Versions_Meta_DescriptionInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Sons of the Forest için ${i?.name} modunun ${count__number} sürümü: değişiklik günlükleri, dosya boyutları ve uyumluluk. En yeni: v${i?.version}.`);
	return /** @type {LocalizedString} */ (`Sons of the Forest için ${i?.name} modunun ${count__number} sürümünün tamamı: değişiklik günlükleri, dosya boyutları ve uyumluluk. En yeni: v${i?.version}.`)
	
};

const zh_mod_versions_meta_description = /** @type {(inputs: Mod_Versions_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest 模组 ${i?.name} 的全部 ${count__number} 个版本，含更新日志、文件大小和兼容性。最新：v${i?.version}。`)
};

const ja_mod_versions_meta_description = /** @type {(inputs: Mod_Versions_Meta_DescriptionInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`Sons of the Forest 用 ${i?.name} の全 ${count__number} バージョン。更新履歴、ファイルサイズ、互換性つき。最新：v${i?.version}。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "All {count__number} version of {name} for Sons of the Forest, with changelogs, file sizes and compatibility. Latest: v{version}." |
* | * | "All {count__number} versions of {name} for Sons of the Forest, with changelogs, file sizes and compatibility. Latest: v{version}." |
*
* @param {Mod_Versions_Meta_DescriptionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_versions_meta_description = /** @type {((inputs: Mod_Versions_Meta_DescriptionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Versions_Meta_DescriptionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_versions_meta_description(inputs)
	if (locale === "de") return de_mod_versions_meta_description(inputs)
	if (locale === "fr") return fr_mod_versions_meta_description(inputs)
	if (locale === "it") return it_mod_versions_meta_description(inputs)
	if (locale === "nl") return nl_mod_versions_meta_description(inputs)
	if (locale === "pl") return pl_mod_versions_meta_description(inputs)
	if (locale === "pt") return pt_mod_versions_meta_description(inputs)
	if (locale === "ru") return ru_mod_versions_meta_description(inputs)
	if (locale === "sv") return sv_mod_versions_meta_description(inputs)
	if (locale === "tr") return tr_mod_versions_meta_description(inputs)
	if (locale === "zh") return zh_mod_versions_meta_description(inputs)
	if (locale === "ja") return ja_mod_versions_meta_description(inputs)
	return en_mod_versions_meta_description(inputs)
});
