/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Preview_DraftInputs */

const en_jams_preview_draft = /** @type {(inputs: Jams_Preview_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This is a draft, so there is no public page yet. The preview shows how it will look once announced.`)
};

const es_jams_preview_draft = /** @type {(inputs: Jams_Preview_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es un borrador, así que aún no hay página pública. La vista previa muestra cómo se verá al anunciarlo.`)
};

const de_jams_preview_draft = /** @type {(inputs: Jams_Preview_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das ist ein Entwurf, daher gibt es noch keine öffentliche Seite. Die Vorschau zeigt, wie sie nach der Ankündigung aussieht.`)
};

const fr_jams_preview_draft = /** @type {(inputs: Jams_Preview_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`C’est un brouillon, donc il n’y a pas encore de page publique. L’aperçu montre son aspect après l’annonce.`)
};

const it_jams_preview_draft = /** @type {(inputs: Jams_Preview_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`È una bozza, quindi non esiste ancora una pagina pubblica. L’anteprima mostra come apparirà dopo l’annuncio.`)
};

const nl_jams_preview_draft = /** @type {(inputs: Jams_Preview_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit is een concept, dus er is nog geen openbare pagina. Het voorbeeld toont hoe die er na de aankondiging uitziet.`)
};

const pl_jams_preview_draft = /** @type {(inputs: Jams_Preview_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`To wersja robocza, więc publiczna strona jeszcze nie istnieje. Podgląd pokazuje, jak będzie wyglądać po ogłoszeniu.`)
};

const pt_jams_preview_draft = /** @type {(inputs: Jams_Preview_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`É um rascunho, então ainda não há página pública. A prévia mostra como ficará depois do anúncio.`)
};

const ru_jams_preview_draft = /** @type {(inputs: Jams_Preview_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Это черновик, публичной страницы пока нет. Предпросмотр показывает, как она будет выглядеть после объявления.`)
};

const sv_jams_preview_draft = /** @type {(inputs: Jams_Preview_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här är ett utkast, så det finns ingen offentlig sida än. Förhandsvisningen visar hur den ser ut efter annonseringen.`)
};

const tr_jams_preview_draft = /** @type {(inputs: Jams_Preview_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu bir taslak, bu yüzden henüz herkese açık sayfa yok. Önizleme, duyurudan sonra nasıl görüneceğini gösterir.`)
};

const zh_jams_preview_draft = /** @type {(inputs: Jams_Preview_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这是草稿，还没有公开页面。预览显示公布后的样子。`)
};

const ja_jams_preview_draft = /** @type {(inputs: Jams_Preview_DraftInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`下書きのため、公開ページはまだありません。告知後の見え方をプレビューで確認できます。`)
};

/**
* | output |
* | --- |
* | "This is a draft, so there is no public page yet. The preview shows how it will look once announced." |
*
* @param {Jams_Preview_DraftInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_preview_draft = /** @type {((inputs?: Jams_Preview_DraftInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Preview_DraftInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_preview_draft(inputs)
	if (locale === "de") return de_jams_preview_draft(inputs)
	if (locale === "fr") return fr_jams_preview_draft(inputs)
	if (locale === "it") return it_jams_preview_draft(inputs)
	if (locale === "nl") return nl_jams_preview_draft(inputs)
	if (locale === "pl") return pl_jams_preview_draft(inputs)
	if (locale === "pt") return pt_jams_preview_draft(inputs)
	if (locale === "ru") return ru_jams_preview_draft(inputs)
	if (locale === "sv") return sv_jams_preview_draft(inputs)
	if (locale === "tr") return tr_jams_preview_draft(inputs)
	if (locale === "zh") return zh_jams_preview_draft(inputs)
	if (locale === "ja") return ja_jams_preview_draft(inputs)
	return en_jams_preview_draft(inputs)
});
