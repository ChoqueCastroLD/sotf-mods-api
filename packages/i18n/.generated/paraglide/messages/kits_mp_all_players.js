/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown> }} Kits_Mp_All_PlayersInputs */

const en_kits_mp_all_players = /** @type {(inputs: Kits_Mp_All_PlayersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Every player: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Every player: ${count__number} mods`)
	
};

const es_kits_mp_all_players = /** @type {(inputs: Kits_Mp_All_PlayersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Todos los jugadores: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Todos los jugadores: ${count__number} mods`)
	
};

const de_kits_mp_all_players = /** @type {(inputs: Kits_Mp_All_PlayersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Alle Spieler: ${count__number} Mod`);
	return /** @type {LocalizedString} */ (`Alle Spieler: ${count__number} Mods`)
	
};

const fr_kits_mp_all_players = /** @type {(inputs: Kits_Mp_All_PlayersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Tous les joueurs : ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Tous les joueurs : ${count__number} mods`)
	
};

const it_kits_mp_all_players = /** @type {(inputs: Kits_Mp_All_PlayersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Tutti i giocatori: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Tutti i giocatori: ${count__number} mod`)
	
};

const nl_kits_mp_all_players = /** @type {(inputs: Kits_Mp_All_PlayersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Alle spelers: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Alle spelers: ${count__number} mods`)
	
};

const pl_kits_mp_all_players = /** @type {(inputs: Kits_Mp_All_PlayersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Wszyscy gracze: ${count__number} mod`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Wszyscy gracze: ${count__number} mody`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Wszyscy gracze: ${count__number} modów`);
	return /** @type {LocalizedString} */ (`Wszyscy gracze: ${count__number} moda`)
	
};

const pt_kits_mp_all_players = /** @type {(inputs: Kits_Mp_All_PlayersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Todos os jogadores: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Todos os jogadores: ${count__number} mods`)
	
};

const ru_kits_mp_all_players = /** @type {(inputs: Kits_Mp_All_PlayersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Всем игрокам: ${count__number} мод`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`Всем игрокам: ${count__number} мода`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`Всем игрокам: ${count__number} модов`);
	return /** @type {LocalizedString} */ (`Всем игрокам: ${count__number} мода`)
	
};

const sv_kits_mp_all_players = /** @type {(inputs: Kits_Mp_All_PlayersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Alla spelare: ${count__number} modd`);
	return /** @type {LocalizedString} */ (`Alla spelare: ${count__number} moddar`)
	
};

const tr_kits_mp_all_players = /** @type {(inputs: Kits_Mp_All_PlayersInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Tüm oyuncular: ${count__number} mod`);
	return /** @type {LocalizedString} */ (`Tüm oyuncular: ${count__number} mod`)
	
};

const zh_kits_mp_all_players = /** @type {(inputs: Kits_Mp_All_PlayersInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});return /** @type {LocalizedString} */ (`所有玩家都需要：${count__number} 个模组`)
};

const ja_kits_mp_all_players = /** @type {(inputs: Kits_Mp_All_PlayersInputs) => LocalizedString} */ (i) => {
	const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});return /** @type {LocalizedString} */ (`全員に必要：${count__number} 件`)
};

/**
* | count__plural | output |
* | --- | --- |
* | "one" | "Every player: {count__number} mod" |
* | * | "Every player: {count__number} mods" |
*
* @param {Kits_Mp_All_PlayersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_mp_all_players = /** @type {((inputs: Kits_Mp_All_PlayersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Mp_All_PlayersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_mp_all_players(inputs)
	if (locale === "de") return de_kits_mp_all_players(inputs)
	if (locale === "fr") return fr_kits_mp_all_players(inputs)
	if (locale === "it") return it_kits_mp_all_players(inputs)
	if (locale === "nl") return nl_kits_mp_all_players(inputs)
	if (locale === "pl") return pl_kits_mp_all_players(inputs)
	if (locale === "pt") return pt_kits_mp_all_players(inputs)
	if (locale === "ru") return ru_kits_mp_all_players(inputs)
	if (locale === "sv") return sv_kits_mp_all_players(inputs)
	if (locale === "tr") return tr_kits_mp_all_players(inputs)
	if (locale === "zh") return zh_kits_mp_all_players(inputs)
	if (locale === "ja") return ja_kits_mp_all_players(inputs)
	return en_kits_mp_all_players(inputs)
});
