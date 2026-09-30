/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Knowledge_Issues_EmptyInputs */

const en_mod_knowledge_issues_empty = /** @type {(inputs: Mod_Knowledge_Issues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No known issues. Add one if players should know about a problem.`)
};

const es_mod_knowledge_issues_empty = /** @type {(inputs: Mod_Knowledge_Issues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin problemas conocidos. Añade uno si los jugadores deben saber de un problema.`)
};

const de_mod_knowledge_issues_empty = /** @type {(inputs: Mod_Knowledge_Issues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Keine bekannten Probleme. Füge eines hinzu, wenn Spieler von einem Problem wissen sollten.`)
};

const fr_mod_knowledge_issues_empty = /** @type {(inputs: Mod_Knowledge_Issues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aucun problème connu. Ajoutez-en un si les joueurs doivent être au courant.`)
};

const it_mod_knowledge_issues_empty = /** @type {(inputs: Mod_Knowledge_Issues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nessun problema noto. Aggiungine uno se i giocatori devono saperlo.`)
};

const nl_mod_knowledge_issues_empty = /** @type {(inputs: Mod_Knowledge_Issues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geen bekende problemen. Voeg er een toe als spelers van een probleem moeten weten.`)
};

const pl_mod_knowledge_issues_empty = /** @type {(inputs: Mod_Knowledge_Issues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Brak znanych problemów. Dodaj jeden, jeśli gracze powinni o nim wiedzieć.`)
};

const pt_mod_knowledge_issues_empty = /** @type {(inputs: Mod_Knowledge_Issues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sem problemas conhecidos. Adicione um se os jogadores precisarem saber de algum problema.`)
};

const ru_mod_knowledge_issues_empty = /** @type {(inputs: Mod_Knowledge_Issues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Известных проблем нет. Добавьте, если игрокам стоит о ней знать.`)
};

const sv_mod_knowledge_issues_empty = /** @type {(inputs: Mod_Knowledge_Issues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inga kända problem. Lägg till ett om spelare bör känna till något.`)
};

const tr_mod_knowledge_issues_empty = /** @type {(inputs: Mod_Knowledge_Issues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bilinen sorun yok. Oyuncuların bilmesi gereken bir sorun varsa ekle.`)
};

const zh_mod_knowledge_issues_empty = /** @type {(inputs: Mod_Knowledge_Issues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`暂无已知问题。如果玩家应当了解某个问题，请添加。`)
};

const ja_mod_knowledge_issues_empty = /** @type {(inputs: Mod_Knowledge_Issues_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`既知の問題はありません。プレイヤーに知らせたい問題があれば追加してください。`)
};

/**
* | output |
* | --- |
* | "No known issues. Add one if players should know about a problem." |
*
* @param {Mod_Knowledge_Issues_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_knowledge_issues_empty = /** @type {((inputs?: Mod_Knowledge_Issues_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Knowledge_Issues_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_knowledge_issues_empty(inputs)
	if (locale === "de") return de_mod_knowledge_issues_empty(inputs)
	if (locale === "fr") return fr_mod_knowledge_issues_empty(inputs)
	if (locale === "it") return it_mod_knowledge_issues_empty(inputs)
	if (locale === "nl") return nl_mod_knowledge_issues_empty(inputs)
	if (locale === "pl") return pl_mod_knowledge_issues_empty(inputs)
	if (locale === "pt") return pt_mod_knowledge_issues_empty(inputs)
	if (locale === "ru") return ru_mod_knowledge_issues_empty(inputs)
	if (locale === "sv") return sv_mod_knowledge_issues_empty(inputs)
	if (locale === "tr") return tr_mod_knowledge_issues_empty(inputs)
	if (locale === "zh") return zh_mod_knowledge_issues_empty(inputs)
	if (locale === "ja") return ja_mod_knowledge_issues_empty(inputs)
	return en_mod_knowledge_issues_empty(inputs)
});
