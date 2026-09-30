/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_Compat_ConflictsInputs */

const en_kits_compat_conflicts = /** @type {(inputs: Kits_Compat_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflict detected`);
	return /** @type {LocalizedString} */ (`${count__number} conflicts detected`)
	
};

const es_kits_compat_conflicts = /** @type {(inputs: Kits_Compat_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflicto detectado`);
	return /** @type {LocalizedString} */ (`${count__number} conflictos detectados`)
	
};

const de_kits_compat_conflicts = /** @type {(inputs: Kits_Compat_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Konflikt erkannt`);
	return /** @type {LocalizedString} */ (`${count__number} Konflikte erkannt`)
	
};

const fr_kits_compat_conflicts = /** @type {(inputs: Kits_Compat_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflit détecté`);
	return /** @type {LocalizedString} */ (`${count__number} conflits détectés`)
	
};

const it_kits_compat_conflicts = /** @type {(inputs: Kits_Compat_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflitto rilevato`);
	return /** @type {LocalizedString} */ (`${count__number} conflitti rilevati`)
	
};

const nl_kits_compat_conflicts = /** @type {(inputs: Kits_Compat_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflict gevonden`);
	return /** @type {LocalizedString} */ (`${count__number} conflicten gevonden`)
	
};

const pl_kits_compat_conflicts = /** @type {(inputs: Kits_Compat_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Wykryto ${count__number} konflikt`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Wykryto ${count__number} konflikty`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Wykryto ${count__number} konfliktów`);
	return /** @type {LocalizedString} */ (`Wykryto ${count__number} konfliktu`)
	
};

const pt_kits_compat_conflicts = /** @type {(inputs: Kits_Compat_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} conflito detectado`);
	return /** @type {LocalizedString} */ (`${count__number} conflitos detectados`)
	
};

const ru_kits_compat_conflicts = /** @type {(inputs: Kits_Compat_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Найден ${count__number} конфликт`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Найдено ${count__number} конфликта`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Найдено ${count__number} конфликтов`);
	return /** @type {LocalizedString} */ (`Найдено ${count__number} конфликта`)
	
};

const sv_kits_compat_conflicts = /** @type {(inputs: Kits_Compat_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} konflikt hittad`);
	return /** @type {LocalizedString} */ (`${count__number} konflikter hittade`)
	
};

const tr_kits_compat_conflicts = /** @type {(inputs: Kits_Compat_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} çakışma bulundu`);
	return /** @type {LocalizedString} */ (`${count__number} çakışma bulundu`)
	
};

const zh_kits_compat_conflicts = /** @type {(inputs: Kits_Compat_ConflictsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`检测到 ${count__number} 处冲突`)
};

const ja_kits_compat_conflicts = /** @type {(inputs: Kits_Compat_ConflictsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`競合を ${count__number} 件検出`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} conflict detected" |
* | * | "{count__number} conflicts detected" |
*
* @param {Kits_Compat_ConflictsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_compat_conflicts = /** @type {((inputs: Kits_Compat_ConflictsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Compat_ConflictsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_compat_conflicts(inputs)
	if (locale === "de") return de_kits_compat_conflicts(inputs)
	if (locale === "fr") return fr_kits_compat_conflicts(inputs)
	if (locale === "it") return it_kits_compat_conflicts(inputs)
	if (locale === "nl") return nl_kits_compat_conflicts(inputs)
	if (locale === "pl") return pl_kits_compat_conflicts(inputs)
	if (locale === "pt") return pt_kits_compat_conflicts(inputs)
	if (locale === "ru") return ru_kits_compat_conflicts(inputs)
	if (locale === "sv") return sv_kits_compat_conflicts(inputs)
	if (locale === "tr") return tr_kits_compat_conflicts(inputs)
	if (locale === "zh") return zh_kits_compat_conflicts(inputs)
	if (locale === "ja") return ja_kits_compat_conflicts(inputs)
	return en_kits_compat_conflicts(inputs)
});
