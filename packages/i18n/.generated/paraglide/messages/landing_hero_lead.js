/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ modCount: NonNullable<unknown>, buildCount: NonNullable<unknown> }} Landing_Hero_LeadInputs */

const en_landing_hero_lead = /** @type {(inputs: Landing_Hero_LeadInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("en", i?.modCount, {});
	const modCount__number = registry.number("en", i?.modCount, {});
	const buildCount__plural = registry.plural("en", i?.buildCount, {});
	const buildCount__number = registry.number("en", i?.buildCount, {});
	if (modCount__plural === "one" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} Sons of the Forest mod, ${buildCount__number} build and Kits, with compatibility reports from players and direct downloads. No waiting, no sign-up.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} Sons of the Forest mod, ${buildCount__number} builds and Kits, with compatibility reports from players and direct downloads. No waiting, no sign-up.`);
	if (buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} Sons of the Forest mods, ${buildCount__number} build and Kits, with compatibility reports from players and direct downloads. No waiting, no sign-up.`);
	return /** @type {LocalizedString} */ (`${modCount__number} Sons of the Forest mods, ${buildCount__number} builds and Kits, with compatibility reports from players and direct downloads. No waiting, no sign-up.`)
	
};

const es_landing_hero_lead = /** @type {(inputs: Landing_Hero_LeadInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("es", i?.modCount, {});
	const modCount__number = registry.number("es", i?.modCount, {});
	const buildCount__plural = registry.plural("es", i?.buildCount, {});
	const buildCount__number = registry.number("es", i?.buildCount, {});
	if (modCount__plural === "one" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mod de Sons of the Forest, ${buildCount__number} build y Kits, con reportes de compatibilidad de los jugadores y descargas directas. Sin esperas ni registro.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mod de Sons of the Forest, ${buildCount__number} builds y Kits, con reportes de compatibilidad de los jugadores y descargas directas. Sin esperas ni registro.`);
	if (buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mods de Sons of the Forest, ${buildCount__number} build y Kits, con reportes de compatibilidad de los jugadores y descargas directas. Sin esperas ni registro.`);
	return /** @type {LocalizedString} */ (`${modCount__number} mods de Sons of the Forest, ${buildCount__number} builds y Kits, con reportes de compatibilidad de los jugadores y descargas directas. Sin esperas ni registro.`)
	
};

const de_landing_hero_lead = /** @type {(inputs: Landing_Hero_LeadInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("de", i?.modCount, {});
	const modCount__number = registry.number("de", i?.modCount, {});
	const buildCount__plural = registry.plural("de", i?.buildCount, {});
	const buildCount__number = registry.number("de", i?.buildCount, {});
	if (modCount__plural === "one" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} Mod für Sons of the Forest, ${buildCount__number} Build und Kits, mit Kompatibilitätsberichten von Spielern und direkten Downloads. Kein Warten, keine Anmeldung.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} Mod für Sons of the Forest, ${buildCount__number} Builds und Kits, mit Kompatibilitätsberichten von Spielern und direkten Downloads. Kein Warten, keine Anmeldung.`);
	if (buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} Mods für Sons of the Forest, ${buildCount__number} Build und Kits, mit Kompatibilitätsberichten von Spielern und direkten Downloads. Kein Warten, keine Anmeldung.`);
	return /** @type {LocalizedString} */ (`${modCount__number} Mods für Sons of the Forest, ${buildCount__number} Builds und Kits, mit Kompatibilitätsberichten von Spielern und direkten Downloads. Kein Warten, keine Anmeldung.`)
	
};

const fr_landing_hero_lead = /** @type {(inputs: Landing_Hero_LeadInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("fr", i?.modCount, {});
	const modCount__number = registry.number("fr", i?.modCount, {});
	const buildCount__plural = registry.plural("fr", i?.buildCount, {});
	const buildCount__number = registry.number("fr", i?.buildCount, {});
	if (modCount__plural === "one" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mod pour Sons of the Forest, ${buildCount__number} build et des Kits, avec les rapports de compatibilité des joueurs et des téléchargements directs. Sans attente ni inscription.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mod pour Sons of the Forest, ${buildCount__number} builds et des Kits, avec les rapports de compatibilité des joueurs et des téléchargements directs. Sans attente ni inscription.`);
	if (buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mods pour Sons of the Forest, ${buildCount__number} build et des Kits, avec les rapports de compatibilité des joueurs et des téléchargements directs. Sans attente ni inscription.`);
	return /** @type {LocalizedString} */ (`${modCount__number} mods pour Sons of the Forest, ${buildCount__number} builds et des Kits, avec les rapports de compatibilité des joueurs et des téléchargements directs. Sans attente ni inscription.`)
	
};

const it_landing_hero_lead = /** @type {(inputs: Landing_Hero_LeadInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("it", i?.modCount, {});
	const modCount__number = registry.number("it", i?.modCount, {});
	const buildCount__plural = registry.plural("it", i?.buildCount, {});
	const buildCount__number = registry.number("it", i?.buildCount, {});
	if (modCount__plural === "one" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mod per Sons of the Forest, ${buildCount__number} build e Kit, con segnalazioni di compatibilità dei giocatori e download diretti. Niente attese, niente registrazione.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mod per Sons of the Forest, ${buildCount__number} build e Kit, con segnalazioni di compatibilità dei giocatori e download diretti. Niente attese, niente registrazione.`);
	if (buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mod per Sons of the Forest, ${buildCount__number} build e Kit, con segnalazioni di compatibilità dei giocatori e download diretti. Niente attese, niente registrazione.`);
	return /** @type {LocalizedString} */ (`${modCount__number} mod per Sons of the Forest, ${buildCount__number} build e Kit, con segnalazioni di compatibilità dei giocatori e download diretti. Niente attese, niente registrazione.`)
	
};

const nl_landing_hero_lead = /** @type {(inputs: Landing_Hero_LeadInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("nl", i?.modCount, {});
	const modCount__number = registry.number("nl", i?.modCount, {});
	const buildCount__plural = registry.plural("nl", i?.buildCount, {});
	const buildCount__number = registry.number("nl", i?.buildCount, {});
	if (modCount__plural === "one" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mod voor Sons of the Forest, ${buildCount__number} build en Kits, met compatibiliteitsrapporten van spelers en directe downloads. Geen wachttijd, geen account nodig.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mod voor Sons of the Forest, ${buildCount__number} builds en Kits, met compatibiliteitsrapporten van spelers en directe downloads. Geen wachttijd, geen account nodig.`);
	if (buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mods voor Sons of the Forest, ${buildCount__number} build en Kits, met compatibiliteitsrapporten van spelers en directe downloads. Geen wachttijd, geen account nodig.`);
	return /** @type {LocalizedString} */ (`${modCount__number} mods voor Sons of the Forest, ${buildCount__number} builds en Kits, met compatibiliteitsrapporten van spelers en directe downloads. Geen wachttijd, geen account nodig.`)
	
};

const pl_landing_hero_lead = /** @type {(inputs: Landing_Hero_LeadInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("pl", i?.modCount, {});
	const modCount__number = registry.number("pl", i?.modCount, {});
	const buildCount__plural = registry.plural("pl", i?.buildCount, {});
	const buildCount__number = registry.number("pl", i?.buildCount, {});
	if (modCount__plural === "one" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mod do Sons of the Forest, ${buildCount__number} build i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (modCount__plural === "one" && buildCount__plural === "few") return /** @type {LocalizedString} */ (`${modCount__number} mod do Sons of the Forest, ${buildCount__number} buildy i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (modCount__plural === "one" && buildCount__plural === "many") return /** @type {LocalizedString} */ (`${modCount__number} mod do Sons of the Forest, ${buildCount__number} buildów i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mod do Sons of the Forest, ${buildCount__number} buildu i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (modCount__plural === "few" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mody do Sons of the Forest, ${buildCount__number} build i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (modCount__plural === "few" && buildCount__plural === "few") return /** @type {LocalizedString} */ (`${modCount__number} mody do Sons of the Forest, ${buildCount__number} buildy i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (modCount__plural === "few" && buildCount__plural === "many") return /** @type {LocalizedString} */ (`${modCount__number} mody do Sons of the Forest, ${buildCount__number} buildów i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (modCount__plural === "few") return /** @type {LocalizedString} */ (`${modCount__number} mody do Sons of the Forest, ${buildCount__number} buildu i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (modCount__plural === "many" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} modów do Sons of the Forest, ${buildCount__number} build i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (modCount__plural === "many" && buildCount__plural === "few") return /** @type {LocalizedString} */ (`${modCount__number} modów do Sons of the Forest, ${buildCount__number} buildy i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (modCount__plural === "many" && buildCount__plural === "many") return /** @type {LocalizedString} */ (`${modCount__number} modów do Sons of the Forest, ${buildCount__number} buildów i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (modCount__plural === "many") return /** @type {LocalizedString} */ (`${modCount__number} modów do Sons of the Forest, ${buildCount__number} buildu i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} modu do Sons of the Forest, ${buildCount__number} build i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (buildCount__plural === "few") return /** @type {LocalizedString} */ (`${modCount__number} modu do Sons of the Forest, ${buildCount__number} buildy i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	if (buildCount__plural === "many") return /** @type {LocalizedString} */ (`${modCount__number} modu do Sons of the Forest, ${buildCount__number} buildów i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`);
	return /** @type {LocalizedString} */ (`${modCount__number} modu do Sons of the Forest, ${buildCount__number} buildu i zestawy, z raportami kompatybilności od graczy i bezpośrednimi pobraniami. Bez czekania i bez rejestracji.`)
	
};

const pt_landing_hero_lead = /** @type {(inputs: Landing_Hero_LeadInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("pt", i?.modCount, {});
	const modCount__number = registry.number("pt", i?.modCount, {});
	const buildCount__plural = registry.plural("pt", i?.buildCount, {});
	const buildCount__number = registry.number("pt", i?.buildCount, {});
	if (modCount__plural === "one" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mod de Sons of the Forest, ${buildCount__number} build e Kits, com relatórios de compatibilidade dos jogadores e downloads diretos. Sem espera, sem cadastro.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mod de Sons of the Forest, ${buildCount__number} builds e Kits, com relatórios de compatibilidade dos jogadores e downloads diretos. Sem espera, sem cadastro.`);
	if (buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} mods de Sons of the Forest, ${buildCount__number} build e Kits, com relatórios de compatibilidade dos jogadores e downloads diretos. Sem espera, sem cadastro.`);
	return /** @type {LocalizedString} */ (`${modCount__number} mods de Sons of the Forest, ${buildCount__number} builds e Kits, com relatórios de compatibilidade dos jogadores e downloads diretos. Sem espera, sem cadastro.`)
	
};

const ru_landing_hero_lead = /** @type {(inputs: Landing_Hero_LeadInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("ru", i?.modCount, {});
	const modCount__number = registry.number("ru", i?.modCount, {});
	const buildCount__plural = registry.plural("ru", i?.buildCount, {});
	const buildCount__number = registry.number("ru", i?.buildCount, {});
	if (modCount__plural === "one" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} мод для Sons of the Forest, ${buildCount__number} постройка и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (modCount__plural === "one" && buildCount__plural === "few") return /** @type {LocalizedString} */ (`${modCount__number} мод для Sons of the Forest, ${buildCount__number} постройки и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (modCount__plural === "one" && buildCount__plural === "many") return /** @type {LocalizedString} */ (`${modCount__number} мод для Sons of the Forest, ${buildCount__number} построек и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} мод для Sons of the Forest, ${buildCount__number} постройки и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (modCount__plural === "few" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} мода для Sons of the Forest, ${buildCount__number} постройка и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (modCount__plural === "few" && buildCount__plural === "few") return /** @type {LocalizedString} */ (`${modCount__number} мода для Sons of the Forest, ${buildCount__number} постройки и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (modCount__plural === "few" && buildCount__plural === "many") return /** @type {LocalizedString} */ (`${modCount__number} мода для Sons of the Forest, ${buildCount__number} построек и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (modCount__plural === "few") return /** @type {LocalizedString} */ (`${modCount__number} мода для Sons of the Forest, ${buildCount__number} постройки и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (modCount__plural === "many" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} модов для Sons of the Forest, ${buildCount__number} постройка и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (modCount__plural === "many" && buildCount__plural === "few") return /** @type {LocalizedString} */ (`${modCount__number} модов для Sons of the Forest, ${buildCount__number} постройки и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (modCount__plural === "many" && buildCount__plural === "many") return /** @type {LocalizedString} */ (`${modCount__number} модов для Sons of the Forest, ${buildCount__number} построек и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (modCount__plural === "many") return /** @type {LocalizedString} */ (`${modCount__number} модов для Sons of the Forest, ${buildCount__number} постройки и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} мода для Sons of the Forest, ${buildCount__number} постройка и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (buildCount__plural === "few") return /** @type {LocalizedString} */ (`${modCount__number} мода для Sons of the Forest, ${buildCount__number} постройки и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	if (buildCount__plural === "many") return /** @type {LocalizedString} */ (`${modCount__number} мода для Sons of the Forest, ${buildCount__number} построек и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`);
	return /** @type {LocalizedString} */ (`${modCount__number} мода для Sons of the Forest, ${buildCount__number} постройки и наборы — с отчётами о совместимости от игроков и прямыми загрузками. Без ожидания и регистрации.`)
	
};

const sv_landing_hero_lead = /** @type {(inputs: Landing_Hero_LeadInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("sv", i?.modCount, {});
	const modCount__number = registry.number("sv", i?.modCount, {});
	const buildCount__plural = registry.plural("sv", i?.buildCount, {});
	const buildCount__number = registry.number("sv", i?.buildCount, {});
	if (modCount__plural === "one" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} modd till Sons of the Forest, ${buildCount__number} bygge och kit, med kompatibilitetsrapporter från spelare och direkta nedladdningar. Ingen väntan, inget konto.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} modd till Sons of the Forest, ${buildCount__number} byggen och kit, med kompatibilitetsrapporter från spelare och direkta nedladdningar. Ingen väntan, inget konto.`);
	if (buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} moddar till Sons of the Forest, ${buildCount__number} bygge och kit, med kompatibilitetsrapporter från spelare och direkta nedladdningar. Ingen väntan, inget konto.`);
	return /** @type {LocalizedString} */ (`${modCount__number} moddar till Sons of the Forest, ${buildCount__number} byggen och kit, med kompatibilitetsrapporter från spelare och direkta nedladdningar. Ingen väntan, inget konto.`)
	
};

const tr_landing_hero_lead = /** @type {(inputs: Landing_Hero_LeadInputs) => LocalizedString} */ (i) => {const modCount__plural = registry.plural("tr", i?.modCount, {});
	const modCount__number = registry.number("tr", i?.modCount, {});
	const buildCount__plural = registry.plural("tr", i?.buildCount, {});
	const buildCount__number = registry.number("tr", i?.buildCount, {});
	if (modCount__plural === "one" && buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} Sons of the Forest modu, ${buildCount__number} yapı ve kitler; oyunculardan uyumluluk raporları ve doğrudan indirmelerle. Bekleme yok, kayıt yok.`);
	if (modCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} Sons of the Forest modu, ${buildCount__number} yapı ve kitler; oyunculardan uyumluluk raporları ve doğrudan indirmelerle. Bekleme yok, kayıt yok.`);
	if (buildCount__plural === "one") return /** @type {LocalizedString} */ (`${modCount__number} Sons of the Forest modu, ${buildCount__number} yapı ve kitler; oyunculardan uyumluluk raporları ve doğrudan indirmelerle. Bekleme yok, kayıt yok.`);
	return /** @type {LocalizedString} */ (`${modCount__number} Sons of the Forest modu, ${buildCount__number} yapı ve kitler; oyunculardan uyumluluk raporları ve doğrudan indirmelerle. Bekleme yok, kayıt yok.`)
	
};

const zh_landing_hero_lead = /** @type {(inputs: Landing_Hero_LeadInputs) => LocalizedString} */ (i) => {
	const modCount__plural = registry.plural("zh", i?.modCount, {});
	const modCount__number = registry.number("zh", i?.modCount, {});
	const buildCount__plural = registry.plural("zh", i?.buildCount, {});
	const buildCount__number = registry.number("zh", i?.buildCount, {});return /** @type {LocalizedString} */ (`${modCount__number} 个 Sons of the Forest 模组、${buildCount__number} 个建筑以及套装，附带玩家的兼容性报告和直接下载。无需等待，无需注册。`)
};

const ja_landing_hero_lead = /** @type {(inputs: Landing_Hero_LeadInputs) => LocalizedString} */ (i) => {
	const modCount__plural = registry.plural("ja", i?.modCount, {});
	const modCount__number = registry.number("ja", i?.modCount, {});
	const buildCount__plural = registry.plural("ja", i?.buildCount, {});
	const buildCount__number = registry.number("ja", i?.buildCount, {});return /** @type {LocalizedString} */ (`Sons of the Forest のMOD ${modCount__number} 件、建築 ${buildCount__number} 件、そしてキット。プレイヤーによる互換性レポートと直接ダウンロード付き。待ち時間も登録も不要です。`)
};

/**
* | modCount__plural | buildCount__plural | output |
* | --- | --- | --- |
* | "one" | "one" | "{modCount__number} Sons of the Forest mod, {buildCount__number} build and Kits, with compatibility reports from players and direct downloads. No waiting, no ..." |
* | "one" | * | "{modCount__number} Sons of the Forest mod, {buildCount__number} builds and Kits, with compatibility reports from players and direct downloads. No waiting, no..." |
* | * | "one" | "{modCount__number} Sons of the Forest mods, {buildCount__number} build and Kits, with compatibility reports from players and direct downloads. No waiting, no..." |
* | * | * | "{modCount__number} Sons of the Forest mods, {buildCount__number} builds and Kits, with compatibility reports from players and direct downloads. No waiting, n..." |
*
* @param {Landing_Hero_LeadInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_hero_lead = /** @type {((inputs: Landing_Hero_LeadInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Hero_LeadInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_hero_lead(inputs)
	if (locale === "de") return de_landing_hero_lead(inputs)
	if (locale === "fr") return fr_landing_hero_lead(inputs)
	if (locale === "it") return it_landing_hero_lead(inputs)
	if (locale === "nl") return nl_landing_hero_lead(inputs)
	if (locale === "pl") return pl_landing_hero_lead(inputs)
	if (locale === "pt") return pt_landing_hero_lead(inputs)
	if (locale === "ru") return ru_landing_hero_lead(inputs)
	if (locale === "sv") return sv_landing_hero_lead(inputs)
	if (locale === "tr") return tr_landing_hero_lead(inputs)
	if (locale === "zh") return zh_landing_hero_lead(inputs)
	if (locale === "ja") return ja_landing_hero_lead(inputs)
	return en_landing_hero_lead(inputs)
});
