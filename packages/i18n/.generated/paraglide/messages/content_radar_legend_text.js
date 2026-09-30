/* eslint-disable */
import * as registry from '../registry.js'
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ min: NonNullable<unknown>, works: NonNullable<unknown>, broken: NonNullable<unknown> }} Content_Radar_Legend_TextInputs */

const en_content_radar_legend_text = /** @type {(inputs: Content_Radar_Legend_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("en", i?.min, {});return /** @type {LocalizedString} */ (`Reports are weighted: the author’s own test counts double, verified creators 1.5×, brand-new accounts half. Below ${min__number} weighted reports a mod stays untested; ${i?.works} or more working means it works; ${i?.broken} or more broken means it’s broken; anything else is mixed.`)
};

const es_content_radar_legend_text = /** @type {(inputs: Content_Radar_Legend_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("es", i?.min, {});return /** @type {LocalizedString} */ (`Los reportes se ponderan: la prueba del propio autor cuenta doble, los creadores verificados 1,5× y las cuentas recién creadas la mitad. Con menos de ${min__number} reportes ponderados el mod queda sin probar; con ${i?.works} o más que funcionan, funciona; con ${i?.broken} o más rotos, está roto; el resto es mixto.`)
};

const de_content_radar_legend_text = /** @type {(inputs: Content_Radar_Legend_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("de", i?.min, {});return /** @type {LocalizedString} */ (`Berichte werden gewichtet: der eigene Test des Autors zählt doppelt, verifizierte Creator 1,5×, ganz neue Konten halb. Unter ${min__number} gewichteten Berichten bleibt ein Mod ungetestet; ab ${i?.works} funktionierenden gilt er als funktionsfähig; ab ${i?.broken} kaputten als kaputt; alles andere ist gemischt.`)
};

const fr_content_radar_legend_text = /** @type {(inputs: Content_Radar_Legend_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("fr", i?.min, {});return /** @type {LocalizedString} */ (`Les rapports sont pondérés : le test de l’auteur compte double, les créateurs vérifiés 1,5×, les comptes tout neufs la moitié. Sous ${min__number} rapports pondérés, un mod reste non testé ; à partir de ${i?.works} de rapports positifs, il fonctionne ; à partir de ${i?.broken} de rapports négatifs, il est cassé ; sinon, c’est mitigé.`)
};

const it_content_radar_legend_text = /** @type {(inputs: Content_Radar_Legend_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("it", i?.min, {});return /** @type {LocalizedString} */ (`Le segnalazioni sono ponderate: il test dell’autore conta doppio, i creatori verificati 1,5×, gli account nuovissimi la metà. Sotto le ${min__number} segnalazioni ponderate una mod resta non testata; con almeno il ${i?.works} di esiti positivi funziona; con almeno il ${i?.broken} di esiti negativi è rotta; altrimenti è mista.`)
};

const nl_content_radar_legend_text = /** @type {(inputs: Content_Radar_Legend_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("nl", i?.min, {});return /** @type {LocalizedString} */ (`Meldingen worden gewogen: de eigen test van de maker telt dubbel, geverifieerde makers 1,5×, gloednieuwe accounts de helft. Onder ${min__number} gewogen meldingen blijft een mod ongetest; vanaf ${i?.works} werkend werkt hij; vanaf ${i?.broken} kapot is hij kapot; al het andere is gemengd.`)
};

const pl_content_radar_legend_text = /** @type {(inputs: Content_Radar_Legend_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("pl", i?.min, {});return /** @type {LocalizedString} */ (`Zgłoszenia mają wagi: test samego autora liczy się podwójnie, zweryfikowanych twórców 1,5×, zupełnie nowych kont połowę. Poniżej ${min__number} ważonych zgłoszeń mod pozostaje nieprzetestowany; od ${i?.works} działających uznaje się, że działa; od ${i?.broken} zepsutych — że jest zepsuty; w pozostałych przypadkach wynik jest mieszany.`)
};

const pt_content_radar_legend_text = /** @type {(inputs: Content_Radar_Legend_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("pt", i?.min, {});return /** @type {LocalizedString} */ (`Os relatos têm pesos: o teste do próprio autor conta em dobro, criadores verificados 1,5× e contas recém-criadas pela metade. Com menos de ${min__number} relatos ponderados, o mod fica como não testado; com ${i?.works} ou mais funcionando, funciona; com ${i?.broken} ou mais quebrados, está quebrado; o resto é misto.`)
};

const ru_content_radar_legend_text = /** @type {(inputs: Content_Radar_Legend_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("ru", i?.min, {});return /** @type {LocalizedString} */ (`У отчётов есть веса: собственный тест автора считается вдвойне, проверенных авторов — в 1,5 раза, совсем новых аккаунтов — наполовину. Меньше ${min__number} взвешенных отчётов — мод не проверен; от ${i?.works} положительных — работает; от ${i?.broken} отрицательных — сломан; в остальных случаях — неоднозначно.`)
};

const sv_content_radar_legend_text = /** @type {(inputs: Content_Radar_Legend_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("sv", i?.min, {});return /** @type {LocalizedString} */ (`Rapporter viktas: skaparens eget test räknas dubbelt, verifierade skapare 1,5×, helt nya konton hälften. Under ${min__number} viktade rapporter är en modd otestad; vid ${i?.works} eller fler som fungerar fungerar den; vid ${i?.broken} eller fler trasiga är den trasig; allt annat är blandat.`)
};

const tr_content_radar_legend_text = /** @type {(inputs: Content_Radar_Legend_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("tr", i?.min, {});return /** @type {LocalizedString} */ (`Raporlar ağırlıklandırılır: yazarın kendi testi iki kat, doğrulanmış içerik üreticileri 1,5 kat, yepyeni hesaplar yarım sayılır. ${min__number} ağırlıklı rapordan azsa mod test edilmemiş sayılır; en az ${i?.works} çalışıyorsa çalışır; en az ${i?.broken} bozuksa bozuktur; geri kalan her şey karışıktır.`)
};

const zh_content_radar_legend_text = /** @type {(inputs: Content_Radar_Legend_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("zh", i?.min, {});return /** @type {LocalizedString} */ (`报告会加权：作者本人的测试算双倍，认证创作者算 1.5 倍，全新账号算一半。加权报告少于 ${min__number} 份的模组视为未测试；可用比例达到 ${i?.works} 即为可用；失效比例达到 ${i?.broken} 即为失效；其余为结果不一。`)
};

const ja_content_radar_legend_text = /** @type {(inputs: Content_Radar_Legend_TextInputs) => LocalizedString} */ (i) => {
	const min__number = registry.number("ja", i?.min, {});return /** @type {LocalizedString} */ (`報告には重みがあります。作者本人のテストは 2 倍、認証クリエイターは 1.5 倍、作成直後のアカウントは半分です。重み付き報告が ${min__number} 件未満なら未検証、動作が ${i?.works} 以上なら動作、不具合が ${i?.broken} 以上なら不具合、それ以外は「まちまち」になります。`)
};

/**
* | output |
* | --- |
* | "Reports are weighted: the author’s own test counts double, verified creators 1.5×, brand-new accounts half. Below {min__number} weighted reports a mod stays ..." |
*
* @param {Content_Radar_Legend_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_radar_legend_text = /** @type {((inputs: Content_Radar_Legend_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Radar_Legend_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_radar_legend_text(inputs)
	if (locale === "de") return de_content_radar_legend_text(inputs)
	if (locale === "fr") return fr_content_radar_legend_text(inputs)
	if (locale === "it") return it_content_radar_legend_text(inputs)
	if (locale === "nl") return nl_content_radar_legend_text(inputs)
	if (locale === "pl") return pl_content_radar_legend_text(inputs)
	if (locale === "pt") return pt_content_radar_legend_text(inputs)
	if (locale === "ru") return ru_content_radar_legend_text(inputs)
	if (locale === "sv") return sv_content_radar_legend_text(inputs)
	if (locale === "tr") return tr_content_radar_legend_text(inputs)
	if (locale === "zh") return zh_content_radar_legend_text(inputs)
	if (locale === "ja") return ja_content_radar_legend_text(inputs)
	return en_content_radar_legend_text(inputs)
});
