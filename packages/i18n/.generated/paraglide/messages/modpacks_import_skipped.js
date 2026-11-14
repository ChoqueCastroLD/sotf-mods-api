/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Modpacks_Import_SkippedInputs */

const en_modpacks_import_skipped = /** @type {(inputs: Modpacks_Import_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod was skipped because it is not on the site or not approved:`);
	return /** @type {LocalizedString} */ (`${count__number} mods were skipped because they are not on the site or not approved:`)
	
};

const es_modpacks_import_skipped = /** @type {(inputs: Modpacks_Import_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Se omitió ${count__number} mod porque no está en el sitio o no está aprobado:`);
	return /** @type {LocalizedString} */ (`Se omitieron ${count__number} mods porque no están en el sitio o no están aprobados:`)
	
};

const de_modpacks_import_skipped = /** @type {(inputs: Modpacks_Import_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mod wurde übersprungen, weil er nicht auf der Seite oder nicht freigegeben ist:`);
	return /** @type {LocalizedString} */ (`${count__number} Mods wurden übersprungen, weil sie nicht auf der Seite oder nicht freigegeben sind:`)
	
};

const fr_modpacks_import_skipped = /** @type {(inputs: Modpacks_Import_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod a été ignoré car il n’est pas sur le site ou pas approuvé :`);
	return /** @type {LocalizedString} */ (`${count__number} mods ont été ignorés car ils ne sont pas sur le site ou pas approuvés :`)
	
};

const it_modpacks_import_skipped = /** @type {(inputs: Modpacks_Import_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod è stata saltata perché non è sul sito o non è approvata:`);
	return /** @type {LocalizedString} */ (`${count__number} mod sono state saltate perché non sono sul sito o non sono approvate:`)
	
};

const nl_modpacks_import_skipped = /** @type {(inputs: Modpacks_Import_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod is overgeslagen omdat hij niet op de site staat of niet is goedgekeurd:`);
	return /** @type {LocalizedString} */ (`${count__number} mods zijn overgeslagen omdat ze niet op de site staan of niet zijn goedgekeurd:`)
	
};

const pl_modpacks_import_skipped = /** @type {(inputs: Modpacks_Import_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Pominięto ${count__number} mod, bo nie ma go na stronie lub nie jest zatwierdzony:`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Pominięto ${count__number} mody, bo nie ma ich na stronie lub nie są zatwierdzone:`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Pominięto ${count__number} modów, bo nie ma ich na stronie lub nie są zatwierdzone:`);
	return /** @type {LocalizedString} */ (`Pominięto ${count__number} modu, bo nie ma ich na stronie lub nie są zatwierdzone:`)
	
};

const pt_modpacks_import_skipped = /** @type {(inputs: Modpacks_Import_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod foi ignorado porque não está no site ou não está aprovado:`);
	return /** @type {LocalizedString} */ (`${count__number} mods foram ignorados porque não estão no site ou não estão aprovados:`)
	
};

const ru_modpacks_import_skipped = /** @type {(inputs: Modpacks_Import_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мод пропущен: его нет на сайте или он не одобрен:`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мода пропущено: их нет на сайте или они не одобрены:`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} модов пропущено: их нет на сайте или они не одобрены:`);
	return /** @type {LocalizedString} */ (`${count__number} мода пропущено: их нет на сайте или они не одобрены:`)
	
};

const sv_modpacks_import_skipped = /** @type {(inputs: Modpacks_Import_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modd hoppades över eftersom den inte finns på sidan eller inte är godkänd:`);
	return /** @type {LocalizedString} */ (`${count__number} moddar hoppades över eftersom de inte finns på sidan eller inte är godkända:`)
	
};

const tr_modpacks_import_skipped = /** @type {(inputs: Modpacks_Import_SkippedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Sitede olmadığı veya onaylanmadığı için ${count__number} mod atlandı:`);
	return /** @type {LocalizedString} */ (`Sitede olmadıkları veya onaylanmadıkları için ${count__number} mod atlandı:`)
	
};

const zh_modpacks_import_skipped = /** @type {(inputs: Modpacks_Import_SkippedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`已跳过 ${count__number} 个模组，因为它们不在本站或未获批准：`)
};

const ja_modpacks_import_skipped = /** @type {(inputs: Modpacks_Import_SkippedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`サイトにない、または承認されていないため ${count__number} 個の Mod をスキップしました:`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} mod was skipped because it is not on the site or not approved:" |
* | * | "{count__number} mods were skipped because they are not on the site or not approved:" |
*
* @param {Modpacks_Import_SkippedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_import_skipped = /** @type {((inputs: Modpacks_Import_SkippedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Import_SkippedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_import_skipped(inputs)
	if (locale === "de") return de_modpacks_import_skipped(inputs)
	if (locale === "fr") return fr_modpacks_import_skipped(inputs)
	if (locale === "it") return it_modpacks_import_skipped(inputs)
	if (locale === "nl") return nl_modpacks_import_skipped(inputs)
	if (locale === "pl") return pl_modpacks_import_skipped(inputs)
	if (locale === "pt") return pt_modpacks_import_skipped(inputs)
	if (locale === "ru") return ru_modpacks_import_skipped(inputs)
	if (locale === "sv") return sv_modpacks_import_skipped(inputs)
	if (locale === "tr") return tr_modpacks_import_skipped(inputs)
	if (locale === "zh") return zh_modpacks_import_skipped(inputs)
	if (locale === "ja") return ja_modpacks_import_skipped(inputs)
	return en_modpacks_import_skipped(inputs)
});
