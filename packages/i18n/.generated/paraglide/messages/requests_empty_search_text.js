/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Empty_Search_TextInputs */

const en_requests_empty_search_text = /** @type {(inputs: Requests_Empty_Search_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Check the spelling, use fewer words or look in all statuses. If nobody asked for it yet, you can.`)
};

const es_requests_empty_search_text = /** @type {(inputs: Requests_Empty_Search_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisa la ortografía, usa menos palabras o busca en todos los estados. Si nadie lo ha pedido aún, puedes hacerlo tú.`)
};

const de_requests_empty_search_text = /** @type {(inputs: Requests_Empty_Search_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüfe die Schreibweise, nutze weniger Wörter oder suche in allen Status. Wenn noch niemand danach gefragt hat, kannst du es tun.`)
};

const fr_requests_empty_search_text = /** @type {(inputs: Requests_Empty_Search_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez l’orthographe, utilisez moins de mots ou cherchez dans tous les statuts. Si personne ne l’a encore demandé, vous pouvez le faire.`)
};

const it_requests_empty_search_text = /** @type {(inputs: Requests_Empty_Search_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controlla l’ortografia, usa meno parole o cerca in tutti gli stati. Se nessuno l’ha ancora chiesto, puoi farlo tu.`)
};

const nl_requests_empty_search_text = /** @type {(inputs: Requests_Empty_Search_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controleer de spelling, gebruik minder woorden of zoek in alle statussen. Heeft nog niemand erom gevraagd, dan kun jij dat doen.`)
};

const pl_requests_empty_search_text = /** @type {(inputs: Requests_Empty_Search_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdź pisownię, użyj mniejszej liczby słów albo szukaj we wszystkich statusach. Jeśli nikt jeszcze o to nie prosił, możesz to zrobić.`)
};

const pt_requests_empty_search_text = /** @type {(inputs: Requests_Empty_Search_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confira a ortografia, use menos palavras ou procure em todos os status. Se ninguém pediu ainda, você pode pedir.`)
};

const ru_requests_empty_search_text = /** @type {(inputs: Requests_Empty_Search_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверьте написание, используйте меньше слов или ищите во всех статусах. Если этого ещё никто не просил, можете попросить вы.`)
};

const sv_requests_empty_search_text = /** @type {(inputs: Requests_Empty_Search_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollera stavningen, använd färre ord eller sök i alla statusar. Om ingen har önskat det ännu kan du göra det.`)
};

const tr_requests_empty_search_text = /** @type {(inputs: Requests_Empty_Search_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yazımı kontrol et, daha az kelime kullan veya tüm durumlarda ara. Henüz kimse istemediyse sen isteyebilirsin.`)
};

const zh_requests_empty_search_text = /** @type {(inputs: Requests_Empty_Search_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`检查拼写，减少关键词，或在所有状态中查找。如果还没有人提过，你可以提出。`)
};

const ja_requests_empty_search_text = /** @type {(inputs: Requests_Empty_Search_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`つづりを確認するか、言葉を減らすか、すべてのステータスから探してください。まだ誰もリクエストしていなければ、あなたが投稿できます。`)
};

/**
* | output |
* | --- |
* | "Check the spelling, use fewer words or look in all statuses. If nobody asked for it yet, you can." |
*
* @param {Requests_Empty_Search_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_empty_search_text = /** @type {((inputs?: Requests_Empty_Search_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Empty_Search_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_empty_search_text(inputs)
	if (locale === "de") return de_requests_empty_search_text(inputs)
	if (locale === "fr") return fr_requests_empty_search_text(inputs)
	if (locale === "it") return it_requests_empty_search_text(inputs)
	if (locale === "nl") return nl_requests_empty_search_text(inputs)
	if (locale === "pl") return pl_requests_empty_search_text(inputs)
	if (locale === "pt") return pt_requests_empty_search_text(inputs)
	if (locale === "ru") return ru_requests_empty_search_text(inputs)
	if (locale === "sv") return sv_requests_empty_search_text(inputs)
	if (locale === "tr") return tr_requests_empty_search_text(inputs)
	if (locale === "zh") return zh_requests_empty_search_text(inputs)
	if (locale === "ja") return ja_requests_empty_search_text(inputs)
	return en_requests_empty_search_text(inputs)
});
