/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Recat_Human_TextInputs */

const en_admin_recat_human_text = /** @type {(inputs: Admin_Recat_Human_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review each suggestion: change the target category or the tags, select the rows you agree with and apply them. Every change is logged.`)
};

const es_admin_recat_human_text = /** @type {(inputs: Admin_Recat_Human_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revisa cada sugerencia: cambia la categoría de destino o las etiquetas, selecciona las filas con las que estés de acuerdo y aplícalas. Cada cambio queda registrado.`)
};

const de_admin_recat_human_text = /** @type {(inputs: Admin_Recat_Human_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Prüfe jeden Vorschlag: Ändere Zielkategorie oder Tags, wähle die Zeilen aus, denen du zustimmst, und wende sie an. Jede Änderung wird protokolliert.`)
};

const fr_admin_recat_human_text = /** @type {(inputs: Admin_Recat_Human_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Examinez chaque suggestion : changez la catégorie cible ou les tags, sélectionnez les lignes avec lesquelles vous êtes d’accord et appliquez-les. Chaque modification est journalisée.`)
};

const it_admin_recat_human_text = /** @type {(inputs: Admin_Recat_Human_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esamina ogni suggerimento: cambia la categoria di destinazione o i tag, seleziona le righe che approvi e applicale. Ogni modifica viene registrata.`)
};

const nl_admin_recat_human_text = /** @type {(inputs: Admin_Recat_Human_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekijk elke suggestie: wijzig de doelcategorie of de tags, selecteer de rijen waar je het mee eens bent en pas ze toe. Elke wijziging wordt vastgelegd.`)
};

const pl_admin_recat_human_text = /** @type {(inputs: Admin_Recat_Human_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przejrzyj każdą sugestię: zmień kategorię docelową lub tagi, zaznacz wiersze, z którymi się zgadzasz, i zastosuj je. Każda zmiana jest zapisywana w dzienniku.`)
};

const pt_admin_recat_human_text = /** @type {(inputs: Admin_Recat_Human_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Revise cada sugestão: mude a categoria de destino ou as tags, selecione as linhas com que concorda e aplique. Cada alteração fica registrada.`)
};

const ru_admin_recat_human_text = /** @type {(inputs: Admin_Recat_Human_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверьте каждое предложение: смените целевую категорию или теги, отметьте строки, с которыми согласны, и примените. Каждое изменение записывается в журнал.`)
};

const sv_admin_recat_human_text = /** @type {(inputs: Admin_Recat_Human_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå igenom varje förslag: ändra målkategori eller taggar, markera raderna du håller med om och tillämpa dem. Varje ändring loggas.`)
};

const tr_admin_recat_human_text = /** @type {(inputs: Admin_Recat_Human_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her öneriyi incele: hedef kategoriyi veya etiketleri değiştir, katıldığın satırları seç ve uygula. Her değişiklik kayda geçer.`)
};

const zh_admin_recat_human_text = /** @type {(inputs: Admin_Recat_Human_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`逐条检查建议：修改目标分类或标签，勾选你认可的行后应用。每项更改都会记录在案。`)
};

const ja_admin_recat_human_text = /** @type {(inputs: Admin_Recat_Human_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`候補を 1 件ずつ確認し、移動先カテゴリーやタグを変更して、同意する行を選んで適用してください。すべての変更は記録されます。`)
};

/**
* | output |
* | --- |
* | "Review each suggestion: change the target category or the tags, select the rows you agree with and apply them. Every change is logged." |
*
* @param {Admin_Recat_Human_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_recat_human_text = /** @type {((inputs?: Admin_Recat_Human_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Recat_Human_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_recat_human_text(inputs)
	if (locale === "de") return de_admin_recat_human_text(inputs)
	if (locale === "fr") return fr_admin_recat_human_text(inputs)
	if (locale === "it") return it_admin_recat_human_text(inputs)
	if (locale === "nl") return nl_admin_recat_human_text(inputs)
	if (locale === "pl") return pl_admin_recat_human_text(inputs)
	if (locale === "pt") return pt_admin_recat_human_text(inputs)
	if (locale === "ru") return ru_admin_recat_human_text(inputs)
	if (locale === "sv") return sv_admin_recat_human_text(inputs)
	if (locale === "tr") return tr_admin_recat_human_text(inputs)
	if (locale === "zh") return zh_admin_recat_human_text(inputs)
	if (locale === "ja") return ja_admin_recat_human_text(inputs)
	return en_admin_recat_human_text(inputs)
});
