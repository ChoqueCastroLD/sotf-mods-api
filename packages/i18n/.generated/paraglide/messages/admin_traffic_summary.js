/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ members: NonNullable<unknown>, perVisitor: NonNullable<unknown>, clicks: NonNullable<unknown> }} Admin_Traffic_SummaryInputs */

const en_admin_traffic_summary = /** @type {(inputs: Admin_Traffic_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Members make ${i?.members} of the views · ${i?.perVisitor} pages per visitor · ${i?.clicks} clicks on «Download» of the manager`)
};

const es_admin_traffic_summary = /** @type {(inputs: Admin_Traffic_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Los miembros hacen el ${i?.members} de las vistas · ${i?.perVisitor} páginas por visitante · ${i?.clicks} clics en «Descargar» del manager`)
};

const de_admin_traffic_summary = /** @type {(inputs: Admin_Traffic_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mitglieder machen ${i?.members} der Aufrufe aus · ${i?.perVisitor} Seiten pro Besucher · ${i?.clicks} Klicks auf „Herunterladen“ des Managers`)
};

const fr_admin_traffic_summary = /** @type {(inputs: Admin_Traffic_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Les membres font ${i?.members} des vues · ${i?.perVisitor} pages par visiteur · ${i?.clicks} clics sur « Télécharger » du manager`)
};

const it_admin_traffic_summary = /** @type {(inputs: Admin_Traffic_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`I membri fanno il ${i?.members} delle visualizzazioni · ${i?.perVisitor} pagine per visitatore · ${i?.clicks} clic su «Scarica» del manager`)
};

const nl_admin_traffic_summary = /** @type {(inputs: Admin_Traffic_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Leden zijn goed voor ${i?.members} van de weergaven · ${i?.perVisitor} pagina’s per bezoeker · ${i?.clicks} klikken op ‘Downloaden’ van de manager`)
};

const pl_admin_traffic_summary = /** @type {(inputs: Admin_Traffic_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Członkowie to ${i?.members} odsłon · ${i?.perVisitor} stron na odwiedzającego · ${i?.clicks} kliknięć w „Pobierz” menedżera`)
};

const pt_admin_traffic_summary = /** @type {(inputs: Admin_Traffic_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Membros fazem ${i?.members} das visualizações · ${i?.perVisitor} páginas por visitante · ${i?.clicks} cliques em “Baixar” do manager`)
};

const ru_admin_traffic_summary = /** @type {(inputs: Admin_Traffic_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Участники дают ${i?.members} просмотров · ${i?.perVisitor} страниц на посетителя · ${i?.clicks} кликов по «Скачать» менеджера`)
};

const sv_admin_traffic_summary = /** @type {(inputs: Admin_Traffic_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Medlemmar står för ${i?.members} av visningarna · ${i?.perVisitor} sidor per besökare · ${i?.clicks} klick på ”Ladda ner” för managern`)
};

const tr_admin_traffic_summary = /** @type {(inputs: Admin_Traffic_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Görüntülemelerin ${i?.members} kadarı üyelerden · ziyaretçi başına ${i?.perVisitor} sayfa · yöneticinin “İndir” düğmesine ${i?.clicks} tıklama`)
};

const zh_admin_traffic_summary = /** @type {(inputs: Admin_Traffic_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`会员贡献 ${i?.members} 的浏览 · 每位访客 ${i?.perVisitor} 页 · 管理器“下载”点击 ${i?.clicks} 次`)
};

const ja_admin_traffic_summary = /** @type {(inputs: Admin_Traffic_SummaryInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`メンバーがビューの ${i?.members} · 訪問者あたり ${i?.perVisitor} ページ · マネージャーの「ダウンロード」クリック ${i?.clicks} 回`)
};

/**
* | output |
* | --- |
* | "Members make {members} of the views · {perVisitor} pages per visitor · {clicks} clicks on «Download» of the manager" |
*
* @param {Admin_Traffic_SummaryInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_traffic_summary = /** @type {((inputs: Admin_Traffic_SummaryInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Traffic_SummaryInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_traffic_summary(inputs)
	if (locale === "de") return de_admin_traffic_summary(inputs)
	if (locale === "fr") return fr_admin_traffic_summary(inputs)
	if (locale === "it") return it_admin_traffic_summary(inputs)
	if (locale === "nl") return nl_admin_traffic_summary(inputs)
	if (locale === "pl") return pl_admin_traffic_summary(inputs)
	if (locale === "pt") return pt_admin_traffic_summary(inputs)
	if (locale === "ru") return ru_admin_traffic_summary(inputs)
	if (locale === "sv") return sv_admin_traffic_summary(inputs)
	if (locale === "tr") return tr_admin_traffic_summary(inputs)
	if (locale === "zh") return zh_admin_traffic_summary(inputs)
	if (locale === "ja") return ja_admin_traffic_summary(inputs)
	return en_admin_traffic_summary(inputs)
});
