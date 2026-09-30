/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Faq_HintInputs */

const en_mod_knowledge_faq_hint = /** @type {(inputs: Mod_Knowledge_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questions players ask often. Your answers appear on the mod page above the automatic ones and are included in search results.`)
};

const es_mod_knowledge_faq_hint = /** @type {(inputs: Mod_Knowledge_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Preguntas frecuentes de los jugadores. Tus respuestas aparecen en la página del mod por encima de las automáticas y se incluyen en los resultados de búsqueda.`)
};

const de_mod_knowledge_faq_hint = /** @type {(inputs: Mod_Knowledge_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Häufige Fragen von Spielern. Deine Antworten erscheinen auf der Mod-Seite vor den automatischen und fließen in die Suchergebnisse ein.`)
};

const fr_mod_knowledge_faq_hint = /** @type {(inputs: Mod_Knowledge_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les questions fréquentes des joueurs. Vos réponses s’affichent sur la page du mod avant les réponses automatiques et sont reprises dans les résultats de recherche.`)
};

const it_mod_knowledge_faq_hint = /** @type {(inputs: Mod_Knowledge_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Domande frequenti dei giocatori. Le tue risposte compaiono nella pagina del mod prima di quelle automatiche e sono incluse nei risultati di ricerca.`)
};

const nl_mod_knowledge_faq_hint = /** @type {(inputs: Mod_Knowledge_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vragen die spelers vaak stellen. Je antwoorden staan op de modpagina boven de automatische en komen in zoekresultaten voor.`)
};

const pl_mod_knowledge_faq_hint = /** @type {(inputs: Mod_Knowledge_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pytania, które często zadają gracze. Twoje odpowiedzi pojawiają się na stronie moda przed automatycznymi i trafiają do wyników wyszukiwania.`)
};

const pt_mod_knowledge_faq_hint = /** @type {(inputs: Mod_Knowledge_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Perguntas que os jogadores fazem com frequência. Suas respostas aparecem na página do mod acima das automáticas e entram nos resultados de busca.`)
};

const ru_mod_knowledge_faq_hint = /** @type {(inputs: Mod_Knowledge_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вопросы, которые часто задают игроки. Ваши ответы показываются на странице мода выше автоматических и попадают в результаты поиска.`)
};

const sv_mod_knowledge_faq_hint = /** @type {(inputs: Mod_Knowledge_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Frågor som spelare ofta ställer. Dina svar visas på modsidan före de automatiska och tas med i sökresultaten.`)
};

const tr_mod_knowledge_faq_hint = /** @type {(inputs: Mod_Knowledge_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncuların sık sorduğu sorular. Cevapların mod sayfasında otomatik cevapların üstünde görünür ve arama sonuçlarına dahil edilir.`)
};

const zh_mod_knowledge_faq_hint = /** @type {(inputs: Mod_Knowledge_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`玩家常问的问题。你的回答会显示在模组页面的自动回答之前，并包含在搜索结果中。`)
};

const ja_mod_knowledge_faq_hint = /** @type {(inputs: Mod_Knowledge_Faq_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤーからよくある質問です。回答はMod ページの自動生成の回答より上に表示され、検索結果にも含まれます。`)
};

/**
* | output |
* | --- |
* | "Questions players ask often. Your answers appear on the mod page above the automatic ones and are included in search results." |
*
* @param {Mod_Knowledge_Faq_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_faq_hint = /** @type {((inputs?: Mod_Knowledge_Faq_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Faq_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_faq_hint(inputs)
	if (locale === "de") return de_mod_knowledge_faq_hint(inputs)
	if (locale === "fr") return fr_mod_knowledge_faq_hint(inputs)
	if (locale === "it") return it_mod_knowledge_faq_hint(inputs)
	if (locale === "nl") return nl_mod_knowledge_faq_hint(inputs)
	if (locale === "pl") return pl_mod_knowledge_faq_hint(inputs)
	if (locale === "pt") return pt_mod_knowledge_faq_hint(inputs)
	if (locale === "ru") return ru_mod_knowledge_faq_hint(inputs)
	if (locale === "sv") return sv_mod_knowledge_faq_hint(inputs)
	if (locale === "tr") return tr_mod_knowledge_faq_hint(inputs)
	if (locale === "zh") return zh_mod_knowledge_faq_hint(inputs)
	if (locale === "ja") return ja_mod_knowledge_faq_hint(inputs)
	return en_mod_knowledge_faq_hint(inputs)
});
