/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Boundary_DetailInputs */

const en_errors_boundary_detail = /** @type {(inputs: Errors_Boundary_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The rest of the page still works. Try loading this section again.`)
};

const es_errors_boundary_detail = /** @type {(inputs: Errors_Boundary_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El resto de la página sigue funcionando. Intenta cargar esta sección de nuevo.`)
};

const de_errors_boundary_detail = /** @type {(inputs: Errors_Boundary_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Rest der Seite funktioniert weiter. Lade diesen Abschnitt noch einmal.`)
};

const fr_errors_boundary_detail = /** @type {(inputs: Errors_Boundary_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le reste de la page fonctionne toujours. Essayez de recharger cette section.`)
};

const it_errors_boundary_detail = /** @type {(inputs: Errors_Boundary_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il resto della pagina funziona ancora. Prova a caricare di nuovo questa sezione.`)
};

const nl_errors_boundary_detail = /** @type {(inputs: Errors_Boundary_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De rest van de pagina werkt nog. Probeer dit onderdeel opnieuw te laden.`)
};

const pl_errors_boundary_detail = /** @type {(inputs: Errors_Boundary_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reszta strony nadal działa. Spróbuj ponownie wczytać tę sekcję.`)
};

const pt_errors_boundary_detail = /** @type {(inputs: Errors_Boundary_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O resto da página continua funcionando. Tente carregar esta seção de novo.`)
};

const ru_errors_boundary_detail = /** @type {(inputs: Errors_Boundary_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Остальная страница работает. Попробуйте загрузить этот раздел ещё раз.`)
};

const sv_errors_boundary_detail = /** @type {(inputs: Errors_Boundary_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Resten av sidan fungerar fortfarande. Försök ladda det här avsnittet igen.`)
};

const tr_errors_boundary_detail = /** @type {(inputs: Errors_Boundary_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sayfanın geri kalanı çalışıyor. Bu bölümü yeniden yüklemeyi dene.`)
};

const zh_errors_boundary_detail = /** @type {(inputs: Errors_Boundary_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`页面其他部分仍可正常使用。请尝试重新加载这一部分。`)
};

const ja_errors_boundary_detail = /** @type {(inputs: Errors_Boundary_DetailInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ページのほかの部分は引き続き使えます。このセクションをもう一度読み込んでみてください。`)
};

/**
* | output |
* | --- |
* | "The rest of the page still works. Try loading this section again." |
*
* @param {Errors_Boundary_DetailInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_boundary_detail = /** @type {((inputs?: Errors_Boundary_DetailInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Boundary_DetailInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_boundary_detail(inputs)
	if (locale === "de") return de_errors_boundary_detail(inputs)
	if (locale === "fr") return fr_errors_boundary_detail(inputs)
	if (locale === "it") return it_errors_boundary_detail(inputs)
	if (locale === "nl") return nl_errors_boundary_detail(inputs)
	if (locale === "pl") return pl_errors_boundary_detail(inputs)
	if (locale === "pt") return pt_errors_boundary_detail(inputs)
	if (locale === "ru") return ru_errors_boundary_detail(inputs)
	if (locale === "sv") return sv_errors_boundary_detail(inputs)
	if (locale === "tr") return tr_errors_boundary_detail(inputs)
	if (locale === "zh") return zh_errors_boundary_detail(inputs)
	if (locale === "ja") return ja_errors_boundary_detail(inputs)
	return en_errors_boundary_detail(inputs)
});
