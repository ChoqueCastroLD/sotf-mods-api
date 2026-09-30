/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Draft_TextInputs */

const en_content_draft_text = /** @type {(inputs: Content_Draft_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This text describes how SOTF Mods works today, but it has not been reviewed by a lawyer yet. It may change before it is final; we will date every change.`)
};

const es_content_draft_text = /** @type {(inputs: Content_Draft_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este texto describe cómo funciona SOTF Mods hoy, pero todavía no lo ha revisado un abogado. Puede cambiar antes de ser definitivo; fecharemos cada cambio.`)
};

const de_content_draft_text = /** @type {(inputs: Content_Draft_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Text beschreibt, wie SOTF Mods heute funktioniert, wurde aber noch nicht von einem Anwalt geprüft. Er kann sich bis zur endgültigen Fassung ändern; jede Änderung wird datiert.`)
};

const fr_content_draft_text = /** @type {(inputs: Content_Draft_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce texte décrit le fonctionnement actuel de SOTF Mods, mais aucun avocat ne l’a encore relu. Il peut changer avant sa version définitive ; chaque modification sera datée.`)
};

const it_content_draft_text = /** @type {(inputs: Content_Draft_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo testo descrive come funziona SOTF Mods oggi, ma non è ancora stato rivisto da un avvocato. Potrebbe cambiare prima della versione definitiva; ogni modifica sarà datata.`)
};

const nl_content_draft_text = /** @type {(inputs: Content_Draft_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze tekst beschrijft hoe SOTF Mods vandaag werkt, maar is nog niet door een jurist bekeken. Hij kan nog veranderen voordat hij definitief is; elke wijziging krijgt een datum.`)
};

const pl_content_draft_text = /** @type {(inputs: Content_Draft_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ten tekst opisuje, jak SOTF Mods działa dziś, ale nie sprawdził go jeszcze prawnik. Może się zmienić przed wersją ostateczną; każdą zmianę opatrzymy datą.`)
};

const pt_content_draft_text = /** @type {(inputs: Content_Draft_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este texto descreve como o SOTF Mods funciona hoje, mas ainda não foi revisado por um advogado. Ele pode mudar antes da versão final; cada mudança será datada.`)
};

const ru_content_draft_text = /** @type {(inputs: Content_Draft_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот текст описывает, как SOTF Mods работает сегодня, но его ещё не проверил юрист. До окончательной версии он может измениться; каждое изменение будет датировано.`)
};

const sv_content_draft_text = /** @type {(inputs: Content_Draft_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Den här texten beskriver hur SOTF Mods fungerar i dag, men den har ännu inte granskats av en jurist. Den kan ändras innan den blir slutgiltig; varje ändring dateras.`)
};

const tr_content_draft_text = /** @type {(inputs: Content_Draft_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu metin SOTF Mods’un bugün nasıl çalıştığını anlatıyor ama henüz bir avukat tarafından incelenmedi. Kesinleşmeden önce değişebilir; her değişiklik tarihlenecek.`)
};

const zh_content_draft_text = /** @type {(inputs: Content_Draft_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本文描述的是 SOTF Mods 当前的运作方式，但尚未经过律师审核。定稿前可能会修改，每次修改都会注明日期。`)
};

const ja_content_draft_text = /** @type {(inputs: Content_Draft_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この文章は SOTF Mods の現在の仕組みを説明したものですが、まだ弁護士の確認を受けていません。確定までに変更される可能性があり、変更のたびに日付を記載します。`)
};

/**
* | output |
* | --- |
* | "This text describes how SOTF Mods works today, but it has not been reviewed by a lawyer yet. It may change before it is final; we will date every change." |
*
* @param {Content_Draft_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_draft_text = /** @type {((inputs?: Content_Draft_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Draft_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_draft_text(inputs)
	if (locale === "de") return de_content_draft_text(inputs)
	if (locale === "fr") return fr_content_draft_text(inputs)
	if (locale === "it") return it_content_draft_text(inputs)
	if (locale === "nl") return nl_content_draft_text(inputs)
	if (locale === "pl") return pl_content_draft_text(inputs)
	if (locale === "pt") return pt_content_draft_text(inputs)
	if (locale === "ru") return ru_content_draft_text(inputs)
	if (locale === "sv") return sv_content_draft_text(inputs)
	if (locale === "tr") return tr_content_draft_text(inputs)
	if (locale === "zh") return zh_content_draft_text(inputs)
	if (locale === "ja") return ja_content_draft_text(inputs)
	return en_content_draft_text(inputs)
});
