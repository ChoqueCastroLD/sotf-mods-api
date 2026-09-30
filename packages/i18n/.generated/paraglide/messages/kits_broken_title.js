/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_Broken_TitleInputs */

const en_kits_broken_title = /** @type {(inputs: Kits_Broken_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod reported broken`);
	return /** @type {LocalizedString} */ (`${count__number} mods reported broken`)
	
};

const es_kits_broken_title = /** @type {(inputs: Kits_Broken_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod con fallos reportados`);
	return /** @type {LocalizedString} */ (`${count__number} mods con fallos reportados`)
	
};

const de_kits_broken_title = /** @type {(inputs: Kits_Broken_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mod als defekt gemeldet`);
	return /** @type {LocalizedString} */ (`${count__number} Mods als defekt gemeldet`)
	
};

const fr_kits_broken_title = /** @type {(inputs: Kits_Broken_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod signalé cassé`);
	return /** @type {LocalizedString} */ (`${count__number} mods signalés cassés`)
	
};

const it_kits_broken_title = /** @type {(inputs: Kits_Broken_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod segnalata non funzionante`);
	return /** @type {LocalizedString} */ (`${count__number} mod segnalate non funzionanti`)
	
};

const nl_kits_broken_title = /** @type {(inputs: Kits_Broken_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod gemeld als kapot`);
	return /** @type {LocalizedString} */ (`${count__number} mods gemeld als kapot`)
	
};

const pl_kits_broken_title = /** @type {(inputs: Kits_Broken_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod zgłoszony jako zepsuty`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} mody zgłoszone jako zepsute`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} modów zgłoszonych jako zepsute`);
	return /** @type {LocalizedString} */ (`${count__number} moda zgłoszonego jako zepsuty`)
	
};

const pt_kits_broken_title = /** @type {(inputs: Kits_Broken_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod com defeito relatado`);
	return /** @type {LocalizedString} */ (`${count__number} mods com defeito relatado`)
	
};

const ru_kits_broken_title = /** @type {(inputs: Kits_Broken_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мод отмечен как сломанный`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мода отмечены как сломанные`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} модов отмечены как сломанные`);
	return /** @type {LocalizedString} */ (`${count__number} мода отмечены как сломанные`)
	
};

const sv_kits_broken_title = /** @type {(inputs: Kits_Broken_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modd rapporterad trasig`);
	return /** @type {LocalizedString} */ (`${count__number} moddar rapporterade trasiga`)
	
};

const tr_kits_broken_title = /** @type {(inputs: Kits_Broken_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod bozuk olarak bildirildi`);
	return /** @type {LocalizedString} */ (`${count__number} mod bozuk olarak bildirildi`)
	
};

const zh_kits_broken_title = /** @type {(inputs: Kits_Broken_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个模组被报告失效`)
};

const ja_kits_broken_title = /** @type {(inputs: Kits_Broken_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件の MOD が動作しないと報告`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} mod reported broken" |
* | * | "{count__number} mods reported broken" |
*
* @param {Kits_Broken_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_broken_title = /** @type {((inputs: Kits_Broken_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Broken_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_broken_title(inputs)
	if (locale === "de") return de_kits_broken_title(inputs)
	if (locale === "fr") return fr_kits_broken_title(inputs)
	if (locale === "it") return it_kits_broken_title(inputs)
	if (locale === "nl") return nl_kits_broken_title(inputs)
	if (locale === "pl") return pl_kits_broken_title(inputs)
	if (locale === "pt") return pt_kits_broken_title(inputs)
	if (locale === "ru") return ru_kits_broken_title(inputs)
	if (locale === "sv") return sv_kits_broken_title(inputs)
	if (locale === "tr") return tr_kits_broken_title(inputs)
	if (locale === "zh") return zh_kits_broken_title(inputs)
	if (locale === "ja") return ja_kits_broken_title(inputs)
	return en_kits_broken_title(inputs)
});
