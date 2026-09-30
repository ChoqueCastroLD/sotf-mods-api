/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ count: NonNullable<unknown>, updates: NonNullable<unknown> }} Me_Backpack_SummaryInputs */

const en_me_backpack_summary = /** @type {(inputs: Me_Backpack_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("en", i?.count, {});
	const count__number = registry.number("en", i?.count, {});
	const updates__exact = registry.number("en", i?.updates, { maximumFractionDigits: 20 });
	const updates__plural = registry.plural("en", i?.updates, {});
	const updates__number = registry.number("en", i?.updates, {});
	if (count__plural === "one" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mod in your backpack · everything up to date`);
	if (count__plural === "one" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod in your backpack · ${updates__number} update available`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod in your backpack · ${updates__number} updates available`);
	if (updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mods in your backpack · everything up to date`);
	if (updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mods in your backpack · ${updates__number} update available`);
	return /** @type {LocalizedString} */ (`${count__number} mods in your backpack · ${updates__number} updates available`)
	
};

const es_me_backpack_summary = /** @type {(inputs: Me_Backpack_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("es", i?.count, {});
	const count__number = registry.number("es", i?.count, {});
	const updates__exact = registry.number("es", i?.updates, { maximumFractionDigits: 20 });
	const updates__plural = registry.plural("es", i?.updates, {});
	const updates__number = registry.number("es", i?.updates, {});
	if (count__plural === "one" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mod en tu mochila · todo al día`);
	if (count__plural === "one" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod en tu mochila · ${updates__number} actualización disponible`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod en tu mochila · ${updates__number} actualizaciones disponibles`);
	if (updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mods en tu mochila · todo al día`);
	if (updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mods en tu mochila · ${updates__number} actualización disponible`);
	return /** @type {LocalizedString} */ (`${count__number} mods en tu mochila · ${updates__number} actualizaciones disponibles`)
	
};

const de_me_backpack_summary = /** @type {(inputs: Me_Backpack_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("de", i?.count, {});
	const count__number = registry.number("de", i?.count, {});
	const updates__exact = registry.number("de", i?.updates, { maximumFractionDigits: 20 });
	const updates__plural = registry.plural("de", i?.updates, {});
	const updates__number = registry.number("de", i?.updates, {});
	if (count__plural === "one" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} Mod in deinem Rucksack · alles aktuell`);
	if (count__plural === "one" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mod in deinem Rucksack · ${updates__number} Update verfügbar`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mod in deinem Rucksack · ${updates__number} Updates verfügbar`);
	if (updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} Mods in deinem Rucksack · alles aktuell`);
	if (updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} Mods in deinem Rucksack · ${updates__number} Update verfügbar`);
	return /** @type {LocalizedString} */ (`${count__number} Mods in deinem Rucksack · ${updates__number} Updates verfügbar`)
	
};

const fr_me_backpack_summary = /** @type {(inputs: Me_Backpack_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("fr", i?.count, {});
	const count__number = registry.number("fr", i?.count, {});
	const updates__exact = registry.number("fr", i?.updates, { maximumFractionDigits: 20 });
	const updates__plural = registry.plural("fr", i?.updates, {});
	const updates__number = registry.number("fr", i?.updates, {});
	if (count__plural === "one" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mod dans votre sac à dos · tout est à jour`);
	if (count__plural === "one" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod dans votre sac à dos · ${updates__number} mise à jour disponible`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod dans votre sac à dos · ${updates__number} mises à jour disponibles`);
	if (updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mods dans votre sac à dos · tout est à jour`);
	if (updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mods dans votre sac à dos · ${updates__number} mise à jour disponible`);
	return /** @type {LocalizedString} */ (`${count__number} mods dans votre sac à dos · ${updates__number} mises à jour disponibles`)
	
};

const it_me_backpack_summary = /** @type {(inputs: Me_Backpack_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("it", i?.count, {});
	const count__number = registry.number("it", i?.count, {});
	const updates__exact = registry.number("it", i?.updates, { maximumFractionDigits: 20 });
	const updates__plural = registry.plural("it", i?.updates, {});
	const updates__number = registry.number("it", i?.updates, {});
	if (count__plural === "one" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mod nel tuo zaino · tutto aggiornato`);
	if (count__plural === "one" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod nel tuo zaino · ${updates__number} aggiornamento disponibile`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod nel tuo zaino · ${updates__number} aggiornamenti disponibili`);
	if (updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mod nel tuo zaino · tutto aggiornato`);
	if (updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod nel tuo zaino · ${updates__number} aggiornamento disponibile`);
	return /** @type {LocalizedString} */ (`${count__number} mod nel tuo zaino · ${updates__number} aggiornamenti disponibili`)
	
};

const nl_me_backpack_summary = /** @type {(inputs: Me_Backpack_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("nl", i?.count, {});
	const count__number = registry.number("nl", i?.count, {});
	const updates__exact = registry.number("nl", i?.updates, { maximumFractionDigits: 20 });
	const updates__plural = registry.plural("nl", i?.updates, {});
	const updates__number = registry.number("nl", i?.updates, {});
	if (count__plural === "one" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mod in je rugzak · alles is bijgewerkt`);
	if (count__plural === "one" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod in je rugzak · ${updates__number} update beschikbaar`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod in je rugzak · ${updates__number} updates beschikbaar`);
	if (updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mods in je rugzak · alles is bijgewerkt`);
	if (updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mods in je rugzak · ${updates__number} update beschikbaar`);
	return /** @type {LocalizedString} */ (`${count__number} mods in je rugzak · ${updates__number} updates beschikbaar`)
	
};

const pl_me_backpack_summary = /** @type {(inputs: Me_Backpack_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pl", i?.count, {});
	const count__number = registry.number("pl", i?.count, {});
	const updates__exact = registry.number("pl", i?.updates, { maximumFractionDigits: 20 });
	const updates__plural = registry.plural("pl", i?.updates, {});
	const updates__number = registry.number("pl", i?.updates, {});
	if (count__plural === "one" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mod w plecaku · wszystko aktualne`);
	if (count__plural === "one" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod w plecaku · ${updates__number} aktualizacja dostępna`);
	if (count__plural === "one" && updates__plural === "few") return /** @type {LocalizedString} */ (`${count__number} mod w plecaku · ${updates__number} aktualizacje dostępne`);
	if (count__plural === "one" && updates__plural === "many") return /** @type {LocalizedString} */ (`${count__number} mod w plecaku · ${updates__number} aktualizacji dostępnych`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod w plecaku · ${updates__number} aktualizacji dostępnej`);
	if (count__plural === "few" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mody w plecaku · wszystko aktualne`);
	if (count__plural === "few" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mody w plecaku · ${updates__number} aktualizacja dostępna`);
	if (count__plural === "few" && updates__plural === "few") return /** @type {LocalizedString} */ (`${count__number} mody w plecaku · ${updates__number} aktualizacje dostępne`);
	if (count__plural === "few" && updates__plural === "many") return /** @type {LocalizedString} */ (`${count__number} mody w plecaku · ${updates__number} aktualizacji dostępnych`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} mody w plecaku · ${updates__number} aktualizacji dostępnej`);
	if (count__plural === "many" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} modów w plecaku · wszystko aktualne`);
	if (count__plural === "many" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modów w plecaku · ${updates__number} aktualizacja dostępna`);
	if (count__plural === "many" && updates__plural === "few") return /** @type {LocalizedString} */ (`${count__number} modów w plecaku · ${updates__number} aktualizacje dostępne`);
	if (count__plural === "many" && updates__plural === "many") return /** @type {LocalizedString} */ (`${count__number} modów w plecaku · ${updates__number} aktualizacji dostępnych`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} modów w plecaku · ${updates__number} aktualizacji dostępnej`);
	if (updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} moda w plecaku · wszystko aktualne`);
	if (updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} moda w plecaku · ${updates__number} aktualizacja dostępna`);
	if (updates__plural === "few") return /** @type {LocalizedString} */ (`${count__number} moda w plecaku · ${updates__number} aktualizacje dostępne`);
	if (updates__plural === "many") return /** @type {LocalizedString} */ (`${count__number} moda w plecaku · ${updates__number} aktualizacji dostępnych`);
	return /** @type {LocalizedString} */ (`${count__number} moda w plecaku · ${updates__number} aktualizacji dostępnej`)
	
};

const pt_me_backpack_summary = /** @type {(inputs: Me_Backpack_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("pt", i?.count, {});
	const count__number = registry.number("pt", i?.count, {});
	const updates__exact = registry.number("pt", i?.updates, { maximumFractionDigits: 20 });
	const updates__plural = registry.plural("pt", i?.updates, {});
	const updates__number = registry.number("pt", i?.updates, {});
	if (count__plural === "one" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mod na sua mochila · tudo atualizado`);
	if (count__plural === "one" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod na sua mochila · ${updates__number} atualização disponível`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mod na sua mochila · ${updates__number} atualizações disponíveis`);
	if (updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} mods na sua mochila · tudo atualizado`);
	if (updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} mods na sua mochila · ${updates__number} atualização disponível`);
	return /** @type {LocalizedString} */ (`${count__number} mods na sua mochila · ${updates__number} atualizações disponíveis`)
	
};

const ru_me_backpack_summary = /** @type {(inputs: Me_Backpack_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ru", i?.count, {});
	const count__number = registry.number("ru", i?.count, {});
	const updates__exact = registry.number("ru", i?.updates, { maximumFractionDigits: 20 });
	const updates__plural = registry.plural("ru", i?.updates, {});
	const updates__number = registry.number("ru", i?.updates, {});
	if (count__plural === "one" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} мод в рюкзаке · всё актуально`);
	if (count__plural === "one" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мод в рюкзаке · доступно ${updates__number} обновление`);
	if (count__plural === "one" && updates__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мод в рюкзаке · доступно ${updates__number} обновления`);
	if (count__plural === "one" && updates__plural === "many") return /** @type {LocalizedString} */ (`${count__number} мод в рюкзаке · доступно ${updates__number} обновлений`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мод в рюкзаке · доступно ${updates__number} обновления`);
	if (count__plural === "few" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} мода в рюкзаке · всё актуально`);
	if (count__plural === "few" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мода в рюкзаке · доступно ${updates__number} обновление`);
	if (count__plural === "few" && updates__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мода в рюкзаке · доступно ${updates__number} обновления`);
	if (count__plural === "few" && updates__plural === "many") return /** @type {LocalizedString} */ (`${count__number} мода в рюкзаке · доступно ${updates__number} обновлений`);
	if (count__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мода в рюкзаке · доступно ${updates__number} обновления`);
	if (count__plural === "many" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} модов в рюкзаке · всё актуально`);
	if (count__plural === "many" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} модов в рюкзаке · доступно ${updates__number} обновление`);
	if (count__plural === "many" && updates__plural === "few") return /** @type {LocalizedString} */ (`${count__number} модов в рюкзаке · доступно ${updates__number} обновления`);
	if (count__plural === "many" && updates__plural === "many") return /** @type {LocalizedString} */ (`${count__number} модов в рюкзаке · доступно ${updates__number} обновлений`);
	if (count__plural === "many") return /** @type {LocalizedString} */ (`${count__number} модов в рюкзаке · доступно ${updates__number} обновления`);
	if (updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} мода в рюкзаке · всё актуально`);
	if (updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} мода в рюкзаке · доступно ${updates__number} обновление`);
	if (updates__plural === "few") return /** @type {LocalizedString} */ (`${count__number} мода в рюкзаке · доступно ${updates__number} обновления`);
	if (updates__plural === "many") return /** @type {LocalizedString} */ (`${count__number} мода в рюкзаке · доступно ${updates__number} обновлений`);
	return /** @type {LocalizedString} */ (`${count__number} мода в рюкзаке · доступно ${updates__number} обновления`)
	
};

const sv_me_backpack_summary = /** @type {(inputs: Me_Backpack_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("sv", i?.count, {});
	const count__number = registry.number("sv", i?.count, {});
	const updates__exact = registry.number("sv", i?.updates, { maximumFractionDigits: 20 });
	const updates__plural = registry.plural("sv", i?.updates, {});
	const updates__number = registry.number("sv", i?.updates, {});
	if (count__plural === "one" && updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} modd i ryggsäcken · allt är uppdaterat`);
	if (count__plural === "one" && updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modd i ryggsäcken · ${updates__number} uppdatering tillgänglig`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`${count__number} modd i ryggsäcken · ${updates__number} uppdateringar tillgängliga`);
	if (updates__exact === "0") return /** @type {LocalizedString} */ (`${count__number} moddar i ryggsäcken · allt är uppdaterat`);
	if (updates__plural === "one") return /** @type {LocalizedString} */ (`${count__number} moddar i ryggsäcken · ${updates__number} uppdatering tillgänglig`);
	return /** @type {LocalizedString} */ (`${count__number} moddar i ryggsäcken · ${updates__number} uppdateringar tillgängliga`)
	
};

const tr_me_backpack_summary = /** @type {(inputs: Me_Backpack_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("tr", i?.count, {});
	const count__number = registry.number("tr", i?.count, {});
	const updates__exact = registry.number("tr", i?.updates, { maximumFractionDigits: 20 });
	const updates__plural = registry.plural("tr", i?.updates, {});
	const updates__number = registry.number("tr", i?.updates, {});
	if (count__plural === "one" && updates__exact === "0") return /** @type {LocalizedString} */ (`Sırt çantanda ${count__number} mod · her şey güncel`);
	if (count__plural === "one" && updates__plural === "one") return /** @type {LocalizedString} */ (`Sırt çantanda ${count__number} mod · ${updates__number} güncelleme var`);
	if (count__plural === "one") return /** @type {LocalizedString} */ (`Sırt çantanda ${count__number} mod · ${updates__number} güncelleme var`);
	if (updates__exact === "0") return /** @type {LocalizedString} */ (`Sırt çantanda ${count__number} mod · her şey güncel`);
	if (updates__plural === "one") return /** @type {LocalizedString} */ (`Sırt çantanda ${count__number} mod · ${updates__number} güncelleme var`);
	return /** @type {LocalizedString} */ (`Sırt çantanda ${count__number} mod · ${updates__number} güncelleme var`)
	
};

const zh_me_backpack_summary = /** @type {(inputs: Me_Backpack_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("zh", i?.count, {});
	const count__number = registry.number("zh", i?.count, {});
	const updates__exact = registry.number("zh", i?.updates, { maximumFractionDigits: 20 });
	const updates__plural = registry.plural("zh", i?.updates, {});
	const updates__number = registry.number("zh", i?.updates, {});
	if (updates__exact === "0") return /** @type {LocalizedString} */ (`背包中有 ${count__number} 个模组 · 全部已是最新`);
	return /** @type {LocalizedString} */ (`背包中有 ${count__number} 个模组 · ${updates__number} 个可用更新`)
	
};

const ja_me_backpack_summary = /** @type {(inputs: Me_Backpack_SummaryInputs) => LocalizedString} */ (i) => {const count__plural = registry.plural("ja", i?.count, {});
	const count__number = registry.number("ja", i?.count, {});
	const updates__exact = registry.number("ja", i?.updates, { maximumFractionDigits: 20 });
	const updates__plural = registry.plural("ja", i?.updates, {});
	const updates__number = registry.number("ja", i?.updates, {});
	if (updates__exact === "0") return /** @type {LocalizedString} */ (`バックパックに ${count__number} 個のMOD · すべて最新`);
	return /** @type {LocalizedString} */ (`バックパックに ${count__number} 個のMOD · アップデート ${updates__number} 件`)
	
};

/**
* | count__plural | updates__exact | updates__plural | output |
* | --- | --- | --- | --- |
* | "one" | "0" | * | "{count__number} mod in your backpack · everything up to date" |
* | "one" | * | "one" | "{count__number} mod in your backpack · {updates__number} update available" |
* | "one" | * | * | "{count__number} mod in your backpack · {updates__number} updates available" |
* | * | "0" | * | "{count__number} mods in your backpack · everything up to date" |
* | * | * | "one" | "{count__number} mods in your backpack · {updates__number} update available" |
* | * | * | * | "{count__number} mods in your backpack · {updates__number} updates available" |
*
* @param {Me_Backpack_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const me_backpack_summary = /** @type {((inputs: Me_Backpack_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Me_Backpack_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_me_backpack_summary(inputs)
	if (locale === "de") return de_me_backpack_summary(inputs)
	if (locale === "fr") return fr_me_backpack_summary(inputs)
	if (locale === "it") return it_me_backpack_summary(inputs)
	if (locale === "nl") return nl_me_backpack_summary(inputs)
	if (locale === "pl") return pl_me_backpack_summary(inputs)
	if (locale === "pt") return pt_me_backpack_summary(inputs)
	if (locale === "ru") return ru_me_backpack_summary(inputs)
	if (locale === "sv") return sv_me_backpack_summary(inputs)
	if (locale === "tr") return tr_me_backpack_summary(inputs)
	if (locale === "zh") return zh_me_backpack_summary(inputs)
	if (locale === "ja") return ja_me_backpack_summary(inputs)
	return en_me_backpack_summary(inputs)
});
