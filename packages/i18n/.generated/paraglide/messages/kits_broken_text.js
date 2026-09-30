/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Broken_TextInputs */

const en_kits_broken_text = /** @type {(inputs: Kits_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Survivors report they don’t work on the current patch. Pin an older version or look for an alternative.`)
};

const es_kits_broken_text = /** @type {(inputs: Kits_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Los jugadores informan de que no funcionan en el parche actual. Fija una versión anterior o busca una alternativa.`)
};

const de_kits_broken_text = /** @type {(inputs: Kits_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spieler melden, dass sie mit dem aktuellen Patch nicht laufen. Leg eine ältere Version fest oder such eine Alternative.`)
};

const fr_kits_broken_text = /** @type {(inputs: Kits_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Des joueurs signalent qu’ils ne fonctionnent pas sur le patch actuel. Épinglez une version plus ancienne ou cherchez une alternative.`)
};

const it_kits_broken_text = /** @type {(inputs: Kits_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I giocatori segnalano che non funzionano con la patch attuale. Fissa una versione precedente o cerca un’alternativa.`)
};

const nl_kits_broken_text = /** @type {(inputs: Kits_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelers melden dat ze niet werken op de huidige patch. Zet een oudere versie vast of zoek een alternatief.`)
};

const pl_kits_broken_text = /** @type {(inputs: Kits_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracze zgłaszają, że nie działają na obecnej łatce. Przypnij starszą wersję lub poszukaj alternatywy.`)
};

const pt_kits_broken_text = /** @type {(inputs: Kits_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jogadores relatam que não funcionam no patch atual. Fixe uma versão anterior ou procure uma alternativa.`)
};

const ru_kits_broken_text = /** @type {(inputs: Kits_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Игроки сообщают, что они не работают на текущем патче. Закрепите более старую версию или найдите замену.`)
};

const sv_kits_broken_text = /** @type {(inputs: Kits_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelare rapporterar att de inte fungerar på aktuell patch. Lås en äldre version eller leta efter ett alternativ.`)
};

const tr_kits_broken_text = /** @type {(inputs: Kits_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncular güncel yamada çalışmadıklarını bildiriyor. Eski bir sürümü sabitle ya da alternatif ara.`)
};

const zh_kits_broken_text = /** @type {(inputs: Kits_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`玩家反馈它们在当前版本无法使用。可以固定旧版本或寻找替代模组。`)
};

const ja_kits_broken_text = /** @type {(inputs: Kits_Broken_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`最新パッチで動作しないと報告されています。古いバージョンに固定するか、代わりの MOD を探してください。`)
};

/**
* | output |
* | --- |
* | "Survivors report they don’t work on the current patch. Pin an older version or look for an alternative." |
*
* @param {Kits_Broken_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_broken_text = /** @type {((inputs?: Kits_Broken_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Broken_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_broken_text(inputs)
	if (locale === "de") return de_kits_broken_text(inputs)
	if (locale === "fr") return fr_kits_broken_text(inputs)
	if (locale === "it") return it_kits_broken_text(inputs)
	if (locale === "nl") return nl_kits_broken_text(inputs)
	if (locale === "pl") return pl_kits_broken_text(inputs)
	if (locale === "pt") return pt_kits_broken_text(inputs)
	if (locale === "ru") return ru_kits_broken_text(inputs)
	if (locale === "sv") return sv_kits_broken_text(inputs)
	if (locale === "tr") return tr_kits_broken_text(inputs)
	if (locale === "zh") return zh_kits_broken_text(inputs)
	if (locale === "ja") return ja_kits_broken_text(inputs)
	return en_kits_broken_text(inputs)
});
