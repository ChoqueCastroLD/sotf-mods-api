/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_Compat_UntestedInputs */

const en_kits_compat_untested = /** @type {(inputs: Kits_Compat_UntestedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} not verified yet`);
	return /** @type {LocalizedString} */ (`${count__number} not verified yet`)
	
};

const es_kits_compat_untested = /** @type {(inputs: Kits_Compat_UntestedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} sin verificar`);
	return /** @type {LocalizedString} */ (`${count__number} sin verificar`)
	
};

const de_kits_compat_untested = /** @type {(inputs: Kits_Compat_UntestedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} noch nicht geprüft`);
	return /** @type {LocalizedString} */ (`${count__number} noch nicht geprüft`)
	
};

const fr_kits_compat_untested = /** @type {(inputs: Kits_Compat_UntestedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} pas encore vérifié`);
	return /** @type {LocalizedString} */ (`${count__number} pas encore vérifiés`)
	
};

const it_kits_compat_untested = /** @type {(inputs: Kits_Compat_UntestedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} non ancora verificata`);
	return /** @type {LocalizedString} */ (`${count__number} non ancora verificate`)
	
};

const nl_kits_compat_untested = /** @type {(inputs: Kits_Compat_UntestedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} nog niet geverifieerd`);
	return /** @type {LocalizedString} */ (`${count__number} nog niet geverifieerd`)
	
};

const pl_kits_compat_untested = /** @type {(inputs: Kits_Compat_UntestedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} niezweryfikowany`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} niezweryfikowane`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} niezweryfikowanych`);
	return /** @type {LocalizedString} */ (`${count__number} niezweryfikowanego`)
	
};

const pt_kits_compat_untested = /** @type {(inputs: Kits_Compat_UntestedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ainda não verificado`);
	return /** @type {LocalizedString} */ (`${count__number} ainda não verificados`)
	
};

const ru_kits_compat_untested = /** @type {(inputs: Kits_Compat_UntestedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} ещё не проверен`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} ещё не проверены`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} ещё не проверены`);
	return /** @type {LocalizedString} */ (`${count__number} ещё не проверены`)
	
};

const sv_kits_compat_untested = /** @type {(inputs: Kits_Compat_UntestedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} inte verifierad än`);
	return /** @type {LocalizedString} */ (`${count__number} inte verifierade än`)
	
};

const tr_kits_compat_untested = /** @type {(inputs: Kits_Compat_UntestedInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} tanesi henüz doğrulanmadı`);
	return /** @type {LocalizedString} */ (`${count__number} tanesi henüz doğrulanmadı`)
	
};

const zh_kits_compat_untested = /** @type {(inputs: Kits_Compat_UntestedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个尚未验证`)
};

const ja_kits_compat_untested = /** @type {(inputs: Kits_Compat_UntestedInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 件は未検証`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "{count__number} not verified yet" |
* | * | "{count__number} not verified yet" |
*
* @param {Kits_Compat_UntestedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_compat_untested = /** @type {((inputs: Kits_Compat_UntestedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Compat_UntestedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_compat_untested(inputs)
	if (locale === "de") return de_kits_compat_untested(inputs)
	if (locale === "fr") return fr_kits_compat_untested(inputs)
	if (locale === "it") return it_kits_compat_untested(inputs)
	if (locale === "nl") return nl_kits_compat_untested(inputs)
	if (locale === "pl") return pl_kits_compat_untested(inputs)
	if (locale === "pt") return pt_kits_compat_untested(inputs)
	if (locale === "ru") return ru_kits_compat_untested(inputs)
	if (locale === "sv") return sv_kits_compat_untested(inputs)
	if (locale === "tr") return tr_kits_compat_untested(inputs)
	if (locale === "zh") return zh_kits_compat_untested(inputs)
	if (locale === "ja") return ja_kits_compat_untested(inputs)
	return en_kits_compat_untested(inputs)
});
