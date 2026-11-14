/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Modpacks_Saved_ConflictsInputs */

const en_modpacks_saved_conflicts = /** @type {(inputs: Modpacks_Saved_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} pair of mods is not compatible.`);
	return /** @type {LocalizedString} */ (`${count__number} pairs of mods are not compatible.`)
	
};

const es_modpacks_saved_conflicts = /** @type {(inputs: Modpacks_Saved_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} par de mods no es compatible.`);
	return /** @type {LocalizedString} */ (`${count__number} pares de mods no son compatibles.`)
	
};

const de_modpacks_saved_conflicts = /** @type {(inputs: Modpacks_Saved_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mod-Paar ist nicht kompatibel.`);
	return /** @type {LocalizedString} */ (`${count__number} Mod-Paare sind nicht kompatibel.`)
	
};

const fr_modpacks_saved_conflicts = /** @type {(inputs: Modpacks_Saved_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} paire de mods n’est pas compatible.`);
	return /** @type {LocalizedString} */ (`${count__number} paires de mods ne sont pas compatibles.`)
	
};

const it_modpacks_saved_conflicts = /** @type {(inputs: Modpacks_Saved_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} coppia di mod non è compatibile.`);
	return /** @type {LocalizedString} */ (`${count__number} coppie di mod non sono compatibili.`)
	
};

const nl_modpacks_saved_conflicts = /** @type {(inputs: Modpacks_Saved_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} paar mods is niet compatibel.`);
	return /** @type {LocalizedString} */ (`${count__number} paren mods zijn niet compatibel.`)
	
};

const pl_modpacks_saved_conflicts = /** @type {(inputs: Modpacks_Saved_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} para modów nie jest zgodna.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} pary modów nie są zgodne.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} par modów nie jest zgodnych.`);
	return /** @type {LocalizedString} */ (`${count__number} pary modów nie są zgodne.`)
	
};

const pt_modpacks_saved_conflicts = /** @type {(inputs: Modpacks_Saved_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} par de mods não é compatível.`);
	return /** @type {LocalizedString} */ (`${count__number} pares de mods não são compatíveis.`)
	
};

const ru_modpacks_saved_conflicts = /** @type {(inputs: Modpacks_Saved_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} пара модов несовместима.`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} пары модов несовместимы.`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} пар модов несовместимы.`);
	return /** @type {LocalizedString} */ (`${count__number} пары модов несовместимы.`)
	
};

const sv_modpacks_saved_conflicts = /** @type {(inputs: Modpacks_Saved_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} par moddar är inte kompatibla.`);
	return /** @type {LocalizedString} */ (`${count__number} par moddar är inte kompatibla.`)
	
};

const tr_modpacks_saved_conflicts = /** @type {(inputs: Modpacks_Saved_ConflictsInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod çifti uyumlu değil.`);
	return /** @type {LocalizedString} */ (`${count__number} mod çifti uyumlu değil.`)
	
};

const zh_modpacks_saved_conflicts = /** @type {(inputs: Modpacks_Saved_ConflictsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`有 ${count__number} 对模组互不兼容。`)
};

const ja_modpacks_saved_conflicts = /** @type {(inputs: Modpacks_Saved_ConflictsInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`互換性のない Mod の組み合わせが ${count__number} 組あります。`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} pair of mods is not compatible." |
* | * | "{count__number} pairs of mods are not compatible." |
*
* @param {Modpacks_Saved_ConflictsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_saved_conflicts = /** @type {((inputs: Modpacks_Saved_ConflictsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Saved_ConflictsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_saved_conflicts(inputs)
	if (locale === "de") return de_modpacks_saved_conflicts(inputs)
	if (locale === "fr") return fr_modpacks_saved_conflicts(inputs)
	if (locale === "it") return it_modpacks_saved_conflicts(inputs)
	if (locale === "nl") return nl_modpacks_saved_conflicts(inputs)
	if (locale === "pl") return pl_modpacks_saved_conflicts(inputs)
	if (locale === "pt") return pt_modpacks_saved_conflicts(inputs)
	if (locale === "ru") return ru_modpacks_saved_conflicts(inputs)
	if (locale === "sv") return sv_modpacks_saved_conflicts(inputs)
	if (locale === "tr") return tr_modpacks_saved_conflicts(inputs)
	if (locale === "zh") return zh_modpacks_saved_conflicts(inputs)
	if (locale === "ja") return ja_modpacks_saved_conflicts(inputs)
	return en_modpacks_saved_conflicts(inputs)
});
