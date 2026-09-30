/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_Compat_BrokenInputs */

const en_kits_compat_broken = /** @type {(inputs: Kits_Compat_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} reported broken`);
	return /** @type {LocalizedString} */ (`${count__number} reported broken`)
	
};

const es_kits_compat_broken = /** @type {(inputs: Kits_Compat_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} con fallos reportados`);
	return /** @type {LocalizedString} */ (`${count__number} con fallos reportados`)
	
};

const de_kits_compat_broken = /** @type {(inputs: Kits_Compat_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} als defekt gemeldet`);
	return /** @type {LocalizedString} */ (`${count__number} als defekt gemeldet`)
	
};

const fr_kits_compat_broken = /** @type {(inputs: Kits_Compat_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} signalé cassé`);
	return /** @type {LocalizedString} */ (`${count__number} signalés cassés`)
	
};

const it_kits_compat_broken = /** @type {(inputs: Kits_Compat_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} segnalata non funzionante`);
	return /** @type {LocalizedString} */ (`${count__number} segnalate non funzionanti`)
	
};

const nl_kits_compat_broken = /** @type {(inputs: Kits_Compat_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} gemeld als kapot`);
	return /** @type {LocalizedString} */ (`${count__number} gemeld als kapot`)
	
};

const pl_kits_compat_broken = /** @type {(inputs: Kits_Compat_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} zgłoszony jako zepsuty`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} zgłoszone jako zepsute`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} zgłoszonych jako zepsute`);
	return /** @type {LocalizedString} */ (`${count__number} zgłoszonego jako zepsuty`)
	
};

const pt_kits_compat_broken = /** @type {(inputs: Kits_Compat_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} com defeito relatado`);
	return /** @type {LocalizedString} */ (`${count__number} com defeito relatado`)
	
};

const ru_kits_compat_broken = /** @type {(inputs: Kits_Compat_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} отмечен как сломанный`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} отмечены как сломанные`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} отмечены как сломанные`);
	return /** @type {LocalizedString} */ (`${count__number} отмечены как сломанные`)
	
};

const sv_kits_compat_broken = /** @type {(inputs: Kits_Compat_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} rapporterad trasig`);
	return /** @type {LocalizedString} */ (`${count__number} rapporterade trasiga`)
	
};

const tr_kits_compat_broken = /** @type {(inputs: Kits_Compat_BrokenInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} tanesi bozuk olarak bildirildi`);
	return /** @type {LocalizedString} */ (`${count__number} tanesi bozuk olarak bildirildi`)
	
};

const zh_kits_compat_broken = /** @type {(inputs: Kits_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个被报告失效`)
};

const ja_kits_compat_broken = /** @type {(inputs: Kits_Compat_BrokenInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件が動作しないと報告`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} reported broken" |
* | * | "{count__number} reported broken" |
*
* @param {Kits_Compat_BrokenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_compat_broken = /** @type {((inputs: Kits_Compat_BrokenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Compat_BrokenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_compat_broken(inputs)
	if (locale === "de") return de_kits_compat_broken(inputs)
	if (locale === "fr") return fr_kits_compat_broken(inputs)
	if (locale === "it") return it_kits_compat_broken(inputs)
	if (locale === "nl") return nl_kits_compat_broken(inputs)
	if (locale === "pl") return pl_kits_compat_broken(inputs)
	if (locale === "pt") return pt_kits_compat_broken(inputs)
	if (locale === "ru") return ru_kits_compat_broken(inputs)
	if (locale === "sv") return sv_kits_compat_broken(inputs)
	if (locale === "tr") return tr_kits_compat_broken(inputs)
	if (locale === "zh") return zh_kits_compat_broken(inputs)
	if (locale === "ja") return ja_kits_compat_broken(inputs)
	return en_kits_compat_broken(inputs)
});
