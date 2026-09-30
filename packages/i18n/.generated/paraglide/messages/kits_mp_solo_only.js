/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_Mp_Solo_OnlyInputs */

const en_kits_mp_solo_only = /** @type {(inputs: Kits_Mp_Solo_OnlyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Solo only: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Solo only: ${count__number} mods`)
	
};

const es_kits_mp_solo_only = /** @type {(inputs: Kits_Mp_Solo_OnlyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Solo un jugador: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Solo un jugador: ${count__number} mods`)
	
};

const de_kits_mp_solo_only = /** @type {(inputs: Kits_Mp_Solo_OnlyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Nur Einzelspieler: ${count__number} Mod`);
	return /** @type {LocalizedString} */ (`Nur Einzelspieler: ${count__number} Mods`)
	
};

const fr_kits_mp_solo_only = /** @type {(inputs: Kits_Mp_Solo_OnlyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Solo uniquement : ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Solo uniquement : ${count__number} mods`)
	
};

const it_kits_mp_solo_only = /** @type {(inputs: Kits_Mp_Solo_OnlyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Solo giocatore singolo: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Solo giocatore singolo: ${count__number} mod`)
	
};

const nl_kits_mp_solo_only = /** @type {(inputs: Kits_Mp_Solo_OnlyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Alleen singleplayer: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Alleen singleplayer: ${count__number} mods`)
	
};

const pl_kits_mp_solo_only = /** @type {(inputs: Kits_Mp_Solo_OnlyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Tylko dla jednego gracza: ${count__number} mod`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Tylko dla jednego gracza: ${count__number} mody`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Tylko dla jednego gracza: ${count__number} modów`);
	return /** @type {LocalizedString} */ (`Tylko dla jednego gracza: ${count__number} moda`)
	
};

const pt_kits_mp_solo_only = /** @type {(inputs: Kits_Mp_Solo_OnlyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Só um jogador: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Só um jogador: ${count__number} mods`)
	
};

const ru_kits_mp_solo_only = /** @type {(inputs: Kits_Mp_Solo_OnlyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Только одиночная игра: ${count__number} мод`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Только одиночная игра: ${count__number} мода`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Только одиночная игра: ${count__number} модов`);
	return /** @type {LocalizedString} */ (`Только одиночная игра: ${count__number} мода`)
	
};

const sv_kits_mp_solo_only = /** @type {(inputs: Kits_Mp_Solo_OnlyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Bara ensam: ${count__number} modd`);
	return /** @type {LocalizedString} */ (`Bara ensam: ${count__number} moddar`)
	
};

const tr_kits_mp_solo_only = /** @type {(inputs: Kits_Mp_Solo_OnlyInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Yalnızca tek oyunculu: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Yalnızca tek oyunculu: ${count__number} mod`)
	
};

const zh_kits_mp_solo_only = /** @type {(inputs: Kits_Mp_Solo_OnlyInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`仅限单人：${count__number} 个模组`)
};

const ja_kits_mp_solo_only = /** @type {(inputs: Kits_Mp_Solo_OnlyInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`ソロ専用：${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Solo only: {count__number} mod" |
* | * | "Solo only: {count__number} mods" |
*
* @param {Kits_Mp_Solo_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_mp_solo_only = /** @type {((inputs: Kits_Mp_Solo_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Mp_Solo_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_mp_solo_only(inputs)
	if (locale === "de") return de_kits_mp_solo_only(inputs)
	if (locale === "fr") return fr_kits_mp_solo_only(inputs)
	if (locale === "it") return it_kits_mp_solo_only(inputs)
	if (locale === "nl") return nl_kits_mp_solo_only(inputs)
	if (locale === "pl") return pl_kits_mp_solo_only(inputs)
	if (locale === "pt") return pt_kits_mp_solo_only(inputs)
	if (locale === "ru") return ru_kits_mp_solo_only(inputs)
	if (locale === "sv") return sv_kits_mp_solo_only(inputs)
	if (locale === "tr") return tr_kits_mp_solo_only(inputs)
	if (locale === "zh") return zh_kits_mp_solo_only(inputs)
	if (locale === "ja") return ja_kits_mp_solo_only(inputs)
	return en_kits_mp_solo_only(inputs)
});
