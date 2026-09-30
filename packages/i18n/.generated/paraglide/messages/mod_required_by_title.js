/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Mod_Required_By_TitleInputs */

const en_mod_required_by_title = /** @type {(inputs: Mod_Required_By_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Required by ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Required by ${count__number} mods`)
	
};

const es_mod_required_by_title = /** @type {(inputs: Mod_Required_By_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Lo necesitan ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Lo necesitan ${count__number} mods`)
	
};

const de_mod_required_by_title = /** @type {(inputs: Mod_Required_By_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Benötigt von ${count__number} Mod`);
	return /** @type {LocalizedString} */ (`Benötigt von ${count__number} Mods`)
	
};

const fr_mod_required_by_title = /** @type {(inputs: Mod_Required_By_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Requis par ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Requis par ${count__number} mods`)
	
};

const it_mod_required_by_title = /** @type {(inputs: Mod_Required_By_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Richiesta da ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Richiesta da ${count__number} mod`)
	
};

const nl_mod_required_by_title = /** @type {(inputs: Mod_Required_By_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nodig voor ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Nodig voor ${count__number} mods`)
	
};

const pl_mod_required_by_title = /** @type {(inputs: Mod_Required_By_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Wymagany przez ${count__number} mod`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Wymagany przez ${count__number} mody`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Wymagany przez ${count__number} modów`);
	return /** @type {LocalizedString} */ (`Wymagany przez ${count__number} modów`)
	
};

const pt_mod_required_by_title = /** @type {(inputs: Mod_Required_By_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Necessário para ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Necessário para ${count__number} mods`)
	
};

const ru_mod_required_by_title = /** @type {(inputs: Mod_Required_By_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Нужен для ${count__number} мода`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Нужен для ${count__number} модов`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Нужен для ${count__number} модов`);
	return /** @type {LocalizedString} */ (`Нужен для ${count__number} мода`)
	
};

const sv_mod_required_by_title = /** @type {(inputs: Mod_Required_By_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Krävs av ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Krävs av ${count__number} moddar`)
	
};

const tr_mod_required_by_title = /** @type {(inputs: Mod_Required_By_TitleInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod bunu gerektiriyor`);
	return /** @type {LocalizedString} */ (`${count__number} mod bunu gerektiriyor`)
	
};

const zh_mod_required_by_title = /** @type {(inputs: Mod_Required_By_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 个模组依赖它`)
};

const ja_mod_required_by_title = /** @type {(inputs: Mod_Required_By_TitleInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`${count__number} 個の MODが必要としています`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Required by {count__number} mod" |
* | * | "Required by {count__number} mods" |
*
* @param {Mod_Required_By_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_required_by_title = /** @type {((inputs: Mod_Required_By_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Required_By_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_required_by_title(inputs)
	if (locale === "de") return de_mod_required_by_title(inputs)
	if (locale === "fr") return fr_mod_required_by_title(inputs)
	if (locale === "it") return it_mod_required_by_title(inputs)
	if (locale === "nl") return nl_mod_required_by_title(inputs)
	if (locale === "pl") return pl_mod_required_by_title(inputs)
	if (locale === "pt") return pt_mod_required_by_title(inputs)
	if (locale === "ru") return ru_mod_required_by_title(inputs)
	if (locale === "sv") return sv_mod_required_by_title(inputs)
	if (locale === "tr") return tr_mod_required_by_title(inputs)
	if (locale === "zh") return zh_mod_required_by_title(inputs)
	if (locale === "ja") return ja_mod_required_by_title(inputs)
	return en_mod_required_by_title(inputs)
});
